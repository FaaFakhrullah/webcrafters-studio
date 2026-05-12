import { NextRequest } from "next/server";

import { parseAndValidate, handleServerError } from "@/lib/api";
import { PUBLIC_FORM_RATE_LIMIT } from "@/lib/constants";
import { db } from "@/lib/db";
import { sendAdminNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, jsonResponse } from "@/lib/utils";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const ipAddress = getClientIp(request);
    const rate = await checkRateLimit({ key: `contact:${ipAddress}`, ...PUBLIC_FORM_RATE_LIMIT });
    if (!rate.allowed) {
      return jsonResponse(false, "Too many requests. Please try again later.", undefined, 429);
    }

    const parsed = await parseAndValidate(request, contactSchema);
    if (parsed.error) return parsed.error;

    const payload = parsed.data;
    if (payload.website) return jsonResponse(true, "Message received.");

    const record = await db.contactMessage.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone || null,
        subject: payload.subject,
        message: payload.message,
        ipAddress,
        userAgent: request.headers.get("user-agent") || null
      }
    });

    await sendAdminNotification({
      subject: `New Contact Message #${record.id}`,
      html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${record.name}</p>
      <p><strong>Email:</strong> ${record.email}</p>
      <p><strong>Phone:</strong> ${record.phone ?? "-"}</p>
      <p><strong>Subject:</strong> ${record.subject}</p>
      <p><strong>Message:</strong> ${record.message}</p>
      `
    });

    return jsonResponse(true, "Message submitted successfully.", { id: record.id }, 201);
  } catch {
    return handleServerError();
  }
}