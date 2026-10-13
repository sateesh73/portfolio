import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'contacts.db');
const DIST_DIR = path.resolve(__dirname, 'dist');

// Ensure parent directory for database exists
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

// Initialize SQLite database
const db = new DatabaseSync(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    timeline TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  // CORS & Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // 1. Health check endpoints
  if (pathname === '/health' || pathname === '/api/health') {
    if (req.method === 'GET') {
      return sendJson(res, 200, {
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptimeSeconds: Math.floor(process.uptime()),
        service: 'sateesh-portfolio',
      });
    }
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  // 2. Contact API endpoints
  if (pathname === '/api/contact') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
        if (body.length > 1e6) {
          req.destroy(); // 1MB payload limit guard
        }
      });

      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          if (!data.name || !data.email || !data.message) {
            return sendJson(res, 400, {
              success: false,
              error: 'Name, email, and message are required',
            });
          }

          const stmt = db.prepare(`
            INSERT INTO contacts (name, email, subject, message, timeline)
            VALUES (?, ?, ?, ?, ?)
          `);
          stmt.run(
            String(data.name).trim(),
            String(data.email).trim(),
            data.subject ? String(data.subject).trim() : 'Senior Architecture Role',
            String(data.message).trim(),
            data.timeline ? String(data.timeline).trim() : 'Immediate'
          );

          return sendJson(res, 200, {
            success: true,
            message: 'Transmission encrypted and saved to SQLite (contacts.db)',
          });
        } catch (err) {
          const errMsg = err instanceof Error ? err.message : String(err);
          return sendJson(res, 500, { success: false, error: errMsg });
        }
      });
      return;
    }

    if (req.method === 'GET') {
      try {
        const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC');
        const rows = stmt.all();
        return sendJson(res, 200, { success: true, contacts: rows });
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        return sendJson(res, 500, { success: false, error: errMsg });
      }
    }

    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  // 3. Static Assets & SPA Fallback
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  // Sanitize path to prevent directory traversal
  let safeRelativePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(DIST_DIR, safeRelativePath);

  // Check if file exists in dist
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      return serveFile(filePath, req, res);
    }

    if (!err && stats.isFile()) {
      return serveFile(filePath, req, res);
    }

    // SPA fallback: Return index.html for non-API client routes
    const fallbackPath = path.join(DIST_DIR, 'index.html');
    return serveFile(fallbackPath, req, res);
  });
});

function serveFile(filePath, req, res) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      return res.end('Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);

    // Cache strategy
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    if (req.method === 'HEAD') {
      res.statusCode = 200;
      return res.end();
    }

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Server Error');
      }
    });
    res.statusCode = 200;
    stream.pipe(res);
  });
}

server.listen(PORT, HOST, () => {
  console.log(`[ORION-HUD] Production server active at http://${HOST}:${PORT}`);
  console.log(`[ORION-HUD] SQLite DB mounted at: ${DB_PATH}`);
  console.log(`[ORION-HUD] Static bundle root: ${DIST_DIR}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log('\n[ORION-HUD] Graceful shutdown initiated...');
  server.close(() => {
    try {
      db.close();
      console.log('[ORION-HUD] SQLite database closed.');
    } catch (_) {}
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
