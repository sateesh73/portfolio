// Web Audio API Synthesizer for tactile retro terminal key clicks

let audioCtx: AudioContext | null = null;
let isAudioEnabled = false;

export function initAudio(): boolean {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return !!audioCtx;
}

export function toggleAudioFeedback(): boolean {
  initAudio();
  isAudioEnabled = !isAudioEnabled;
  if (isAudioEnabled) {
    playKeyClick(880, 'sine', 0.06);
  }
  return isAudioEnabled;
}

export function isAudioActive(): boolean {
  return isAudioEnabled;
}

export function playKeyClick(freq = 640, type: OscillatorType = 'sine', duration = 0.03): void {
  if (!isAudioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Ignore audio errors gracefully
  }
}
