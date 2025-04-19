# ---------------------------------------------------------------------------
# Base image
# ---------------------------------------------------------------------------
FROM mcr.microsoft.com/playwright:v1.51.1-noble AS base

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

# Set working directory
WORKDIR /app

# enable turbo
RUN pnpm add -g turbo

# Copy the source code and prune the workspace
COPY . .
RUN turbo prune playwright-web --docker

# ---------------------------------------------------------------------------
# Installer
# ---------------------------------------------------------------------------
FROM base AS installer

# Set working directory
WORKDIR /app

# First install the dependencies (as they change less often)
# Add lockfile and package.json's of isolated subworkspace
COPY --from=builder /app/out/json/ .
RUN pnpm install

# Copy the pruned workspace
COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
FROM base AS runner

# Set working directory
WORKDIR /app

# Don't run production as root
# fixme: Error: EACCES: permission denied, mkdir '/nonexistent/.cache/node/corepack/v1' 로 주석 처리
#RUN addgroup --system --gid 1002 nodejs
#RUN adduser --system --uid 1002 nextjs
#USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer /app ./

# start e2e tests
CMD ["pnpm", "run", "test:e2e:ci"]
