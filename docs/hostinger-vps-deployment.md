# Hostinger VPS Deployment Guide (Docker + Nginx + SSL)

This guide deploys WebCrafters Studio on a Hostinger VPS using:
- `docker-compose.prod.yml`
- Nginx reverse proxy
- Let's Encrypt SSL (free)

## 1. Prerequisites
- Hostinger VPS (Ubuntu recommended)
- Domain already pointing to your VPS public IP:
  - `A` record: `yourdomain.com` -> `YOUR_VPS_IP`
  - `A` record: `www.yourdomain.com` -> `YOUR_VPS_IP`
- SSH access to VPS

## 2. Prepare server
```bash
sudo apt update
sudo apt install -y git
```

If Docker is not installed yet, install Docker and Compose plugin on VPS.

## 3. Pull project
```bash
cd /opt
sudo git clone https://github.com/FaaFakhrullah/webcrafters-studio.git
sudo chown -R $USER:$USER /opt/webcrafters-studio
cd /opt/webcrafters-studio
```

## 4. Prepare production env
```bash
cp .env.production.example .env.production
nano .env.production
```

Set at minimum:
- `NEXTAUTH_SECRET` (long random string)
- `NEXTAUTH_URL=https://yourdomain.com`
- `PUBLIC_SITE_URL=https://yourdomain.com`
- `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
- `MYSQL_ROOT_PASSWORD` (strong)
- `DATABASE_URL` (must match MySQL password and host `mysql`)
- SMTP settings (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`

## 5. Start production stack (HTTP first)
This starts app + MySQL + Nginx with HTTP config for certificate challenge.

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## 6. Run Prisma migration and seed
```bash
docker compose -f docker-compose.prod.yml exec app npm run prisma:deploy
docker compose -f docker-compose.prod.yml exec app npm run prisma:seed
```

## 7. Issue SSL certificate (Let's Encrypt)
Replace `yourdomain.com` and email:

```bash
docker run --rm \
  -v "$(pwd)/infra/certbot/www:/var/www/certbot" \
  -v "$(pwd)/infra/certbot/conf:/etc/letsencrypt" \
  certbot/certbot:latest certonly \
  --webroot -w /var/www/certbot \
  -d yourdomain.com -d www.yourdomain.com \
  --email you@yourdomain.com \
  --agree-tos --no-eff-email
```

## 8. Switch Nginx to HTTPS config
```bash
cp infra/nginx/webcrafters-https.conf infra/nginx/default.conf
```

Update `infra/nginx/default.conf` and replace:
- `yourdomain.com` with your real domain

Restart:
```bash
docker compose -f docker-compose.prod.yml up -d
docker compose -f docker-compose.prod.yml restart nginx
```

## 9. Verify deployment
- Public site: `https://yourdomain.com`
- Admin login: `https://yourdomain.com/admin/login`
- Mail/API flow: submit `Request Quotation` and verify in admin dashboard

## 10. SSL renewal
Run periodically (for example cron weekly):

```bash
docker run --rm \
  -v "$(pwd)/infra/certbot/www:/var/www/certbot" \
  -v "$(pwd)/infra/certbot/conf:/etc/letsencrypt" \
  certbot/certbot:latest renew
```

Then reload nginx:
```bash
docker compose -f docker-compose.prod.yml restart nginx
```

## 11. Operational commands
```bash
docker compose -f docker-compose.prod.yml ps
docker compose -f docker-compose.prod.yml logs --tail=120 app
docker compose -f docker-compose.prod.yml logs --tail=120 nginx
docker compose -f docker-compose.prod.yml down
```

## Notes
- This production compose does not expose MySQL to public internet.
- Mailpit is intentionally not included in production stack.
- Keep `.env.production` private and never commit it.
