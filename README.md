# Sateesh Varma - Distributed Systems Portfolio

> **Senior Systems Architect & Full-Stack Lead** (7+ YOE @ TransUnion & ex-IBM).  
> High-throughput microservices (Java 21 / Loom), event streaming backbones (Apache Kafka >12.5M msgs/day), container platforms (Red Hat OpenShift / AWS), and enterprise autonomous AI agent workflows.

---

## Architecture & Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS v4, Lucide Icons, Lenis Momentum Scrolling.
- **Audio Synthesizer**: Web Audio API tactile mechanical terminal keycaps feedback.
- **2D Graphics**: Harmonic waveform canvas & HUD radar telemetry (60 FPS, zero 3D/Three.js overhead).
- **Backend & Database**: Native `node:sqlite` (SQLite 3) encrypted contact transmission store.
- **Containerization**: Multi-stage Docker build with non-root security context, automated health check, and persistent volume mount.

---

## Quick Start (Docker)

### 1. Run via Docker Compose (Recommended)

```bash
# Build and start container in detached mode
docker compose up -d --build

# View container logs
docker compose logs -f

# Check health status
curl http://localhost:3000/health

# Stop and remove container (data is preserved in volume)
docker compose down
```

The application is accessible at **`http://localhost:3000`**.

### 2. Run via Docker CLI

```bash
# Build the production image
docker build -t sateesh-portfolio:latest .

# Run container with persistent volume
docker run -d \
  --name sateesh-portfolio \
  -p 3000:3000 \
  -v portfolio_data:/app/data \
  sateesh-portfolio:latest

# Check logs
docker logs -f sateesh-portfolio
```

---

## Local Development (Without Docker)

### Prerequisites
- Node.js `v22.5.0` or higher (includes built-in `node:sqlite`).

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server (React HUD + SQLite API middleware)
npm run dev

# Build production bundle
npm run build

# Run production server locally
npm start
```

- Local Dev URL: `http://localhost:5173`
- Production Server URL: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Container liveness & uptime probe |
| `POST` | `/api/contact` | Submits transmission payload into `contacts.db` |
| `GET` | `/api/contact` | Retrieves stored transmissions (newest first) |

---

## Environment Variables

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Node runtime environment |
| `PORT` | `3000` | HTTP listening port |
| `HOST` | `0.0.0.0` | Host binding interface |
| `DB_PATH` | `/app/data/contacts.db` | SQLite database file location |
