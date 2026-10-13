import React, { useEffect, useRef } from 'react';

export const WaveformCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    let phase = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX / window.innerWidth;
      mouse.targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Pause animation when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            animate();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayW = canvas.width / dpr;
      const displayH = canvas.height / dpr;

      ctx.clearRect(0, 0, displayW, displayH);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      phase += 0.022;

      const centerY = displayH * 0.5;
      const centerX = displayW * 0.5;

      // 1. Radar Circular Target Rings
      ctx.save();
      ctx.strokeStyle = 'rgba(229, 164, 66, 0.06)';
      ctx.lineWidth = 1;
      for (let r = 80; r <= 280; r += 70) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotating Radar Telemetry Line
      const radarAngle = phase * 0.75;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(radarAngle) * 260, centerY + Math.sin(radarAngle) * 260);
      ctx.strokeStyle = 'rgba(229, 164, 66, 0.16)';
      ctx.stroke();
      ctx.restore();

      // 2. Harmonic Oscilloscope Wave 1 (Soft Amber Phosphor)
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(229, 164, 66, 0.42)';
      ctx.shadowColor = 'rgba(229, 164, 66, 0.35)';
      ctx.shadowBlur = 12;

      for (let x = 0; x < displayW; x += 3) {
        const progress = x / displayW;
        const envelope = Math.sin(progress * Math.PI);
        const y =
          centerY +
          Math.sin(x * 0.015 + phase) * 35 * envelope +
          Math.sin(x * 0.035 - phase * 1.5 + (mouse.x - 0.5) * 4) * 18 * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // 3. Harmonic Sub-Carrier Wave 2 (Subtle Steel Cyan)
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.32)';
      ctx.shadowColor = 'rgba(56, 189, 248, 0.2)';
      ctx.shadowBlur = 8;

      for (let x = 0; x < displayW; x += 4) {
        const progress = x / displayW;
        const envelope = Math.sin(progress * Math.PI);
        const y =
          centerY +
          Math.cos(x * 0.02 + phase * 0.8) * 25 * envelope +
          Math.sin(x * 0.008 + phase * 2.2) * 20 * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // 4. Data Packet stream pulses
      for (let i = 0; i < 5; i++) {
        const packetX = (phase * 110 + i * 180) % displayW;
        const progress = packetX / displayW;
        const envelope = Math.sin(progress * Math.PI);
        const packetY = centerY + Math.sin(packetX * 0.015 + phase) * 35 * envelope;

        ctx.fillStyle = i % 2 === 0 ? 'rgba(229, 164, 66, 0.8)' : 'rgba(56, 189, 248, 0.8)';
        ctx.beginPath();
        ctx.arc(packetX, packetY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      if (!isVisible) {
        return;
      }
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
