# ==========================================
# Stage 1: Build the Vite production bundle
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Cache dependencies layer
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Run TypeScript verification & Vite production build
RUN npm run build

# ==========================================
# Stage 2: Minimal hardened runtime image
# ==========================================
FROM node:22-alpine AS runner

WORKDIR /app

# Non-root user setup for container security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create dedicated directory for persistent SQLite storage
RUN mkdir -p /app/data && chown -R appuser:appgroup /app/data

# Copy built production assets & server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/package.json ./package.json

# Environment configuration
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    DB_PATH=/app/data/contacts.db

# Expose default port
EXPOSE 3000

# Volume mount point for SQLite database persistence
VOLUME ["/app/data"]

# Switch to non-root security context
USER appuser

# Healthcheck configuration using native node fetch
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

# Launch the production server
CMD ["node", "server.js"]
