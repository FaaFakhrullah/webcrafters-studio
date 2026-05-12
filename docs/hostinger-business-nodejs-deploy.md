# Hostinger Business/Cloud Node.js Deploy (No VPS)

This guide is for Hostinger **Business Web Hosting / Cloud Hosting** using the **Node.js Web App** feature (no VPS, no Docker).

## 1. Confirm plan support
Your hosting must support Node.js Web App in hPanel (Business/Cloud plans).

If your current plan does not show Node.js Web App, upgrade plan first.

## 2. Prepare repository
Make sure your latest code is already pushed to GitHub:
- `https://github.com/FaaFakhrullah/webcrafters-studio`

## 3. Create MySQL database in hPanel
In hPanel:
1. Go to **Databases > MySQL Databases**
2. Create:
   - Database name
   - Database user
   - Database password
3. Note these values:
   - DB host
   - DB port (usually `3306`)
   - DB name
   - DB user
   - DB password

## 4. Add Node.js Web App in hPanel
1. Go to **Websites > Manage > Node.js**
2. Click **Create application**
3. Connect your GitHub repository
4. Set branch to `main`
5. Framework/runtime:
   - Node.js version: `20.x` or `22.x` (recommended)

## 5. Configure build/start commands
Set:
- Install command:
```bash
npm install
```
- Build command:
```bash
npm run build
```
- Start command:
```bash
npm run start
```

## 6. Configure environment variables in hPanel
Add these environment variables exactly:

```env
DATABASE_URL=mysql://DB_USER:DB_PASSWORD@DB_HOST:3306/DB_NAME

NEXTAUTH_SECRET=CHANGE_TO_LONG_RANDOM_SECRET
NEXTAUTH_URL=https://yourdomain.com

ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=CHANGE_THIS_STRONG_PASSWORD

EMAIL_FROM=WebCrafters Studio <noreply@yourdomain.com>

SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_COMPANY_NAME=WebCrafters Studio
PUBLIC_WHATSAPP_NUMBER=60123456789
PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
PUBLIC_CONTACT_PHONE=+60 12-345 6789

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_COMPANY_NAME=WebCrafters Studio
NEXT_PUBLIC_WHATSAPP_NUMBER=60123456789
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
NEXT_PUBLIC_CONTACT_PHONE=+60 12-345 6789
```

Important:
- Do **not** use `localhost` in `DATABASE_URL` on Hostinger.
- Use your real domain for `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL`.

## 7. Deploy application
Click **Deploy** in Node.js app panel.

Wait until build logs show success.

## 8. Run Prisma migration and seed
If hPanel Node.js terminal is available, run:

```bash
npm run prisma:deploy
npm run prisma:seed
```

If terminal is not available in your plan:
1. Temporarily run these commands locally against production DB (careful), or
2. Open Hostinger support chat and ask to enable app terminal for Node.js Web App

## 9. Verify production
1. Open:
   - `https://yourdomain.com`
   - `https://yourdomain.com/admin/login`
2. Login with `ADMIN_EMAIL` and `ADMIN_PASSWORD`
3. Submit one quotation form
4. Confirm:
   - Data appears in admin quotations
   - Email arrives in admin mailbox

## 10. Common issues
1. `PrismaClientInitializationError`
   - `DATABASE_URL` is wrong (host/user/password/db)
2. Admin login fails
   - seed not run, or wrong `ADMIN_EMAIL` / `ADMIN_PASSWORD`
3. Email not sent
   - SMTP env values wrong
   - submission still saved in DB by design
4. 500 on deploy start
   - check Node.js app logs in hPanel

## 11. Notes about your project
- `docker-compose.yml` / `docker-compose.prod.yml` are for local/VPS only.
- For Hostinger Business/Cloud Node.js Web App, deployment is from hPanel (no Docker).
