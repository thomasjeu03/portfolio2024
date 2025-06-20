# Stage 1: Build the React app with Vite
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Node.js and 'serve'
FROM node:20-alpine

WORKDIR /app

# Only copy production dependencies (including 'serve')
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built app from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npx", "serve", "dist", "-l", "3000"]
