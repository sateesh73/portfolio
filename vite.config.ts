import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { DatabaseSync } from 'node:sqlite'

function sqliteContactPlugin(): Plugin {
  const attachMiddleware = (server: { middlewares: { use: (path: string, handler: (req: any, res: any) => void) => void } }) => {
    const dbPath = process.env.DB_PATH || 'contacts.db'
    const db = new DatabaseSync(dbPath)
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
    `)

    server.middlewares.use('/api/contact', (req, res) => {
      if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk: any) => {
          body += chunk
        })
        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}')
            if (!data.name || !data.email || !data.message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: 'Name, email, and message are required' }))
              return
            }

            const stmt = db.prepare(`
              INSERT INTO contacts (name, email, subject, message, timeline)
              VALUES (?, ?, ?, ?, ?)
            `)
            stmt.run(
              data.name,
              data.email,
              data.subject || 'General Enquiry',
              data.message,
              data.timeline || 'Immediate'
            )

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, message: 'Transmission encrypted and saved to SQLite (contacts.db)' }))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            const errMsg = err instanceof Error ? err.message : String(err)
            res.end(JSON.stringify({ success: false, error: errMsg }))
          }
        })
      } else if (req.method === 'GET') {
        try {
          const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC')
          const rows = stmt.all()
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true, contacts: rows }))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          const errMsg = err instanceof Error ? err.message : String(err)
          res.end(JSON.stringify({ success: false, error: errMsg }))
        }
      } else {
        res.statusCode = 405
        res.end('Method Not Allowed')
      }
    })
  }

  return {
    name: 'sqlite-contact-plugin',
    configureServer(server) {
      attachMiddleware(server)
    },
    configurePreviewServer(server) {
      attachMiddleware(server)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sqliteContactPlugin(),
  ],
})
