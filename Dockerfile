# ---- Build stage ----
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package.json and lockfile first (for caching purposes)
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy everything else and build
COPY . .
RUN npm run build

# ---- Production stage ----
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy the necessary build files from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.* ./

# Install production dependencies only
RUN npm install --omit=dev

# Set the environment to production
ENV NODE_ENV production

# Expose the required port (3000 for Next.js)
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run", "start"]
    
