# Build stage
FROM node:18-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy workspace configuration
COPY pnpm-workspace.yaml ./
COPY package.json ./

# Copy the api project
COPY apps/api ./apps/api
# Copy the prisma package
COPY packages/prisma ./packages/prisma

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the api project
RUN cd apps/api && pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy Prisma files
COPY --from=builder /app/packages/prisma/schema.prisma ./prisma/schema.prisma
COPY --from=builder /app/packages/prisma/dist ./node_modules/@diary4/prisma/dist

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["node", "dist/main.js"]