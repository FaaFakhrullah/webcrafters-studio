import nodemailer from "nodemailer";

type EmailPayload = {
  subject: string;
  html: string;
};

function canSendEmail() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.ADMIN_EMAIL);
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 1025);
  if (!host) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        : undefined
  });
}

export async function sendAdminNotification({ subject, html }: EmailPayload) {
  if (!canSendEmail()) {
    console.warn("SMTP is not configured; skipping outgoing notification email.");
    return { sent: false };
  }

  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP transporter could not be initialized.");
    return { sent: false };
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "WebCrafters Studio <noreply@example.com>",
      to: process.env.ADMIN_EMAIL,
      subject,
      html
    });
    return { sent: true };
  } catch (error) {
    console.warn("Email notification failed:", error instanceof Error ? error.message : "Unknown error");
    return { sent: false };
  }
}