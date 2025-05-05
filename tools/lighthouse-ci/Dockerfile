# ---------------------------------------------------------------------------
# Base image
# ---------------------------------------------------------------------------
FROM node:22-slim AS base

# enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

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
RUN turbo prune lighthouse-ci --docker

# ---------------------------------------------------------------------------
# Installer
# ---------------------------------------------------------------------------
FROM base AS installer

# Set working directory
WORKDIR /app

# Add lockfile and package.json's of isolated subworkspace
COPY --from=builder /app/out/json/ .

# Copy the pruned workspace
COPY --from=builder /app/out/full/ .

# First install the dependencies (as they change less often)
RUN pnpm install --frozen-lockfile

# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
FROM base AS runner

# Install utilities
RUN apt-get update --fix-missing && apt-get -y upgrade && apt-get install -y git wget gnupg && apt-get clean

# Install latest chrome stable package.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get clean

# Set working directory
WORKDIR /app

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer /app ./

# check if the environment variable is set
RUN echo "LHCI_BUILD_CONTEXT__CURRENT_HASH : $LHCI_BUILD_CONTEXT__CURRENT_HASH"

# start test:lighthouse task
CMD ["pnpm", "run", "test:lighthouse"]
