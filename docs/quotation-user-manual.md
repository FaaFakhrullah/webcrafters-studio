# Quotation Request User Manual

## Purpose
This manual explains how to submit quotation requests from the website, how admins process them, and how to test the full flow with 5 sample cases.

## Prerequisites
1. Services running:
   - App: `http://localhost:3000`
   - MySQL: `localhost:3306`
   - Mailpit: `http://localhost:8025`
2. Docker stack started:
```powershell
docker compose up -d --build
```

## User Flow (Public)
1. Open `http://localhost:3000/request-quotation`.
2. Fill required fields:
   - `Full name`
   - `Email`
   - `Phone number`
   - `Project type`
   - `Budget range`
   - `Timeline`
   - At least 1 `Required feature`
   - `Project description` (minimum 10 characters)
   - Consent checkbox must be checked
3. Click `Submit Quotation Request`.
4. Expected result:
   - Success message appears.
   - Data saved to MySQL table `QuotationRequest`.
   - Notification email sent to Mailpit/admin inbox.

## Admin Flow
1. Open `http://localhost:3000/admin/login`.
2. Login using:
   - Email from `.env` `ADMIN_EMAIL`
   - Password from `.env` `ADMIN_PASSWORD`
3. Open `http://localhost:3000/admin/quotations`.
4. Review incoming records.
5. Open detail page and update status:
   - `New`, `Contacted`, `Quoted`, `In Progress`, `Completed`, `Rejected`
6. Add internal notes and save.

## 5 End-to-End Sample Test Cases
Use these from UI or API.

### Sample 1: Small Business Website
- Name: `Aina Rahman`
- Company: `Aina Bakery`
- Email: `aina.sample1@example.com`
- Type: `Business website`
- Budget: `RM1,000 - RM3,000`
- Features: `Contact form`, `WhatsApp integration`
- Expected: saved + email notification

### Sample 2: SME E-commerce
- Name: `Hafiz Karim`
- Company: `HK Trading`
- Email: `hafiz.sample2@example.com`
- Type: `E-commerce`
- Budget: `RM3,000 - RM8,000`
- Features: `Product catalog`, `Online payment`, `Admin panel`
- Expected: saved + email notification

### Sample 3: Clinic Web Application
- Name: `Nadia Yusuf`
- Company: `Nadia Clinic`
- Email: `nadia.sample3@example.com`
- Type: `Web application`
- Budget: `RM8,000 - RM15,000`
- Features: `Booking system`, `Dashboard/reporting`, `User login`
- Expected: saved + email notification

### Sample 4: Urgent Landing Page
- Name: `Daniel Lim`
- Company: `DL Advisory`
- Email: `daniel.sample4@example.com`
- Type: `Landing page`
- Budget: `Below RM1,000`
- Timeline: `Urgent`
- Features: `Contact form`, `SEO setup`
- Expected: saved + email notification

### Sample 5: Enterprise Dashboard
- Name: `Sarah Wong`
- Company: `SW Holdings`
- Email: `sarah.sample5@example.com`
- Type: `Dashboard system`
- Budget: `RM15,000+`
- Features: `Dashboard/reporting`, `API integration`, `Maintenance`
- Expected: saved + email notification

## Quick Verification Commands

### 1. Check last 5 quotations in DB
```powershell
@'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
(async () => {
  const rows = await prisma.quotationRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { id: true, fullName: true, email: true, projectType: true, status: true }
  });
  console.log(rows);
  await prisma.$disconnect();
})();
'@ | node
```

### 2. Check Mailpit messages
```powershell
Invoke-WebRequest -Uri "http://localhost:8025/api/v1/messages" -UseBasicParsing
```

## Troubleshooting: Click Submit But Nothing Happens
1. Check field validation messages under inputs.
2. Ensure at least 1 required feature is selected.
3. Ensure consent checkbox is checked.
4. Ensure project description is at least 10 characters.
5. If `Existing website URL` is filled, use valid URL format like `https://example.com`.
6. Open browser Console and Network tabs, then submit again.
7. Check app logs:
```powershell
docker compose logs --tail=120 app
```
8. If rate limited (429), wait 15 minutes or use another IP/session.

## Notes
- If SMTP fails, data is still saved to MySQL (email failure does not drop submissions).
- Honeypot field blocks bot spam silently.
