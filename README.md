# MoraSpirit 360 - Next.js + Prisma

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Configure environment:
```bash
cp .env.example .env
```
Then update `DATABASE_URL` in `.env`.

3. Generate Prisma client:
```bash
pnpm prisma:generate
```

4. Create and apply migration (local/dev):
```bash
pnpm prisma:migrate:dev --name init_request_submissions
```

For VPS/production deploys, use:
```bash
pnpm prisma:migrate
```

5. Run app:
```bash
pnpm dev
```

## Request Form Backend

- Frontend submits to `POST /api/forms/request`.
- Data is stored in `RequestSubmission` table via Prisma.
- Text-only payload is stored (no file uploads).

## Docker

Build image:
```bash
docker build -t moraspirit360-ui:local .
```

Run container (using your own MySQL database):
```bash
docker run --rm -p 3000:3000 \
  -e DATABASE_URL="mysql://root:password@host.docker.internal:3306/moraspirit360" \
  -e RUN_PRISMA_MIGRATIONS=true \
  moraspirit360-ui:local
```

Run with docker compose (uses `DATABASE_URL` from your `.env`):
```bash
docker compose up --build
```

## Publish Docker Package To GitHub

This repo includes:
- `Dockerfile`
- `.github/workflows/docker-publish.yml`

On push to `main`, tag push (`v*`), or manual `workflow_dispatch`, GitHub Actions builds and publishes image to:
- `ghcr.io/<owner>/<repo>`

You can pull it with:
```bash
docker pull ghcr.io/<owner>/<repo>:latest
```

## Useful Commands

```bash
pnpm lint
pnpm build
pnpm start
```
