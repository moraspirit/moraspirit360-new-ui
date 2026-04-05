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
- Uploaded files are stored at `/public/uploads/requests/<request-id>/`.

## Useful Commands

```bash
pnpm lint
pnpm build
pnpm start
```
