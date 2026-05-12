# Hostinger VPS Quick Deploy (Step-by-Step)

This is the fastest production deployment path for WebCrafters Studio on Hostinger VPS.

## Before You Start
1. You have a Hostinger VPS with Docker available.
2. Your domain DNS is pointed to the VPS IP:
   - `A` record: `yourdomain.com` -> `YOUR_VPS_IP`
   - `A` record: `www.yourdomain.com` -> `YOUR_VPS_IP`
3. Your GitHub repo is ready:
   - `https://github.com/FaaFakhrullah/webcrafters-studio`

## Step 1: SSH into VPS
```bash
ssh root@YOUR_VPS_IP
```

## Step 2: Install basic tools (if missing)
```bash
apt update
apt install -y git
```

## Step 3: Clone project
```bash
cd /opt
git clone https://github.com/FaaFakhrullah/webcrafters-studio.git
cd webcrafters-studio
```

## Step 4: Create production environment file
```bash
cp .env.production.example .env.production
nano .env.production
```

Fill these values carefully:
1. `NEXTAUTH_SECRET` = long random secret
2. `NEXTAUTH_URL=https://yourdomain.com`
3. `PUBLIC_SITE_URL=https://yourdomain.com`
4. `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
5. `MYSQL_ROOT_PASSWORD` = strong password
6. `DATABASE_URL` must match MySQL password and host `mysql`
7. SMTP values:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
8. `ADMIN_EMAIL` and `ADMIN_PASSWORD`

## Step 5: Start stack (HTTP first)
```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## Step 6: Run database deploy and seed
```bash
docker compose -f docker-compose.prod.yml exec app npm run prisma:deploy
docker compose -f docker-compose.prod.yml exec app npm run prisma:seed
```

## Step 7: Issue SSL certificate (Let's Encrypt)
Replace domain and email:

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

## Step 8: Enable HTTPS Nginx config
```bash
cp infra/nginx/webcrafters-https.conf infra/nginx/default.conf
nano infra/nginx/default.conf
```

Replace all `yourdomain.com` in that file with your real domain.

Restart Nginx:
```bash
docker compose -f docker-compose.prod.yml restart nginx
```

## Step 9: Verify live system
1. Open `https://yourdomain.com`
2. Open `https://yourdomain.com/admin/login`
3. Login with `.env.production` admin credentials
4. Submit one quotation from public form
5. Check admin quotations list

## Step 10: SSL renew command (run regularly)
```bash
docker run --rm \
  -v "$(pwd)/infra/certbot/www:/var/www/certbot" \
  -v "$(pwd)/infra/certbot/conf:/etc/letsencrypt" \
  certbot/certbot:latest renew
docker compose -f docker-compose.prod.yml restart nginx
```

## Useful Operations
```bash
docker compose -f docker-compose.prod.yml ps
docker compose -f docker-compose.prod.yml logs --tail=120 app
docker compose -f docker-compose.prod.yml logs --tail=120 nginx
docker compose -f docker-compose.prod.yml down
```

## If Something Fails
1. DNS not propagated:
   - SSL issuance fails
2. Wrong `.env.production` values:
   - app or DB connection fails
3. Check logs:
```bash
docker compose -f docker-compose.prod.yml logs --tail=200 app
docker compose -f docker-compose.prod.yml logs --tail=200 nginx
```
