#!/bin/sh
set -e

if [ "${RUN_PRISMA_MIGRATIONS:-false}" = "true" ]; then
  echo "Running Prisma migrations..."
  pnpm prisma:migrate
fi

echo "Starting Next.js server..."
exec pnpm start
