# WebCrafters Studio

Production-ready agency website and inquiry CRM for Malaysian web development services, built with free/open-source technologies.

## Project Overview
WebCrafters Studio is a professional, responsive, SEO-friendly, and security-focused website for a web development agency serving Malaysian SMEs, startups, organizations, NGOs, and government/corporate clients.

## Key Features
- Marketing website with premium corporate UI and conversion-focused copy
- Public pages: Home, Services, Packages, Portfolio, Request Quotation, Book Consultation, Contact, About, FAQ, Terms, Privacy
- WhatsApp integration (floating button + CTA links)
- Public forms with Zod validation, honeypot protection, and MySQL-based rate limiting
- MySQL persistence for quotations, consultations, and contact messages
- Nodemailer SMTP notifications (graceful fallback when SMTP is not configured)
- Protected admin dashboard and inquiry management system
- Admin CRUD for services, packages, portfolio, testimonials, FAQs, and site settings
- SEO metadata per page, Open Graph, sitemap, robots rules, semantic structure
- Docker Compose setup with Next.js app, MySQL Community Server, Mailpit, and optional Redis

## Free/Open-Source Stack
- Next.js (App Router), TypeScript
- Tailwind CSS
- Prisma ORM + MySQL Community Server
- React Hook Form + Zod
- bcryptjs + JWT cookie session auth
- Nodemailer + Mailpit
- Docker + Docker Compose

No paid-required services are used by default.

## Folder Structure
```text
webcrafters-studio/
+-- app/
+-- components/
+-- lib/
+-- prisma/
+-- public/
+-- uploads/
+-- middleware.ts
+-- next.config.ts
+-- tailwind.config.ts
+-- Dockerfile
+-- docker-compose.yml
+-- .env.example
```

## Local Installation
1. Copy environment file:
```bash
cp .env.example .env
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Run migrations:
```bash
npm run prisma:migrate
```

5. Seed database:
```bash
npm run prisma:seed
```

6. Start development server:
```bash
npm run dev
```

Open: `http://localhost:3000`

## Admin Login
- URL: `http://localhost:3000/admin/login`
- Email: `ADMIN_EMAIL` from `.env`
- Password: `ADMIN_PASSWORD` from `.env`

## Mailpit Email Testing
When using local Docker:
- SMTP host: `mailpit`
- SMTP port: `1025`
- Mailpit UI: `http://localhost:8025`

## Docker Deployment (Local)
1. Prepare `.env` from `.env.example`.
2. Build and run:
```bash
docker compose up --build -d
```
3. Run migrations and seed (inside app container):
```bash
docker compose exec app npm run prisma:migrate
docker compose exec app npm run prisma:seed
```

## Docker Deployment (Production)
1. Copy production env:
```bash
cp .env.production.example .env.production
```
2. Build and run production stack:
```bash
docker compose -f docker-compose.prod.yml up --build -d
```
3. Run migrations:
```bash
docker compose -f docker-compose.prod.yml exec app npm run prisma:deploy
```

## Production Build
```bash
npm run build
npm run start
```

## VPS Self-Hosted Deployment Guide
1. Provision VPS (Ubuntu recommended) with Docker and Docker Compose.
2. Clone/copy project and create `.env` with secure production values.
3. Set production `DATABASE_URL` and SMTP credentials.
4. Run:
```bash
docker compose up --build -d
```
5. Execute migrations:
```bash
docker compose exec app npm run prisma:deploy
```
6. Optional: seed initial marketing/admin data:
```bash
docker compose exec app npm run prisma:seed
```

For Hostinger VPS end-to-end setup:
- `docs/hostinger-vps-deployment.md`
- `docs/hostinger-quick-deploy.md` (fast copy-paste flow)

For Hostinger Business/Cloud (non-VPS) Node.js setup:
- `docs/hostinger-business-nodejs-deploy.md`

### NGINX Reverse Proxy Example
```nginx
server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## SMTP Production Setup
Set in `.env`:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_FROM`

If SMTP is unavailable, form submissions are still saved in MySQL.

## Customization Guide
Update these areas:
- Company name: `.env` (`PUBLIC_COMPANY_NAME`) and admin settings
- Logo/branding: layout components under `components/layout/`
- Pricing and packages: admin `/admin/packages` or seed data `prisma/seed.ts`
- Services: admin `/admin/services` or seed data
- Portfolio: admin `/admin/portfolio` or seed data
- Testimonials/FAQs: admin pages or seed data
- WhatsApp number: `.env` (`PUBLIC_WHATSAPP_NUMBER`) and site settings
- Contact email/phone: `.env` + admin settings
- Colors/theme: `app/globals.css` + `tailwind.config.ts`
- SEO metadata: page-level `metadata` objects in `app/**/page.tsx`

## Troubleshooting
- Prisma connection error: verify MySQL is running and `DATABASE_URL` is correct.
- Login fails: confirm seeded admin credentials in `.env` and rerun seed.
- Email not delivered: check SMTP config or use Mailpit locally.
- 429 errors on forms: rate limiter is active by design; retry later.
- Admin route blocked: ensure valid login session cookie is present.

## User Manual
- Quotation end-to-end flow and sample test cases:
  - `docs/quotation-user-manual.md`

## Important Security Notes
- Change `NEXTAUTH_SECRET` and admin credentials before production.
- Use HTTPS in production.
- Restrict server ports and secure your reverse proxy.
- Back up MySQL data regularly.
