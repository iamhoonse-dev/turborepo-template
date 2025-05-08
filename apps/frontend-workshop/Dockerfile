# ---------------------------------------------------------------------------
# Base image
# ---------------------------------------------------------------------------
FROM node:22-alpine AS base

# enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

# ---------------------------------------------------------------------------
# Builder
# ---------------------------------------------------------------------------
FROM base AS builder

# libc6-compat
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# enable turbo
RUN pnpm add -g turbo

# Copy the source code and prune the workspace
COPY . .
RUN turbo prune frontend-workshop --docker

# ---------------------------------------------------------------------------
# Installer
# ---------------------------------------------------------------------------
FROM base AS installer

# libc6-compat
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Add lockfile and package.json's of isolated subworkspace
COPY --from=builder /app/out/json/ .

# Copy the pruned workspace
COPY --from=builder /app/out/full/ .

# First install the dependencies (as they change less often)
RUN pnpm install --frozen-lockfile

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# Build the project
RUN pnpm turbo build

# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
FROM nginx:alpine AS runner

# Set working directory
WORKDIR /app

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer /app/apps/frontend-workshop/storybook-static /usr/share/nginx/html

# start NGINX
CMD ["nginx", "-g", "daemon off;"]
