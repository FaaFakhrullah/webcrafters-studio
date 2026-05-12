import { NextRequest } from "next/server";

import { parseAndValidate, handleServerError } from "@/lib/api";
import { PUBLIC_FORM_RATE_LIMIT } from "@/lib/constants";
import { db } from "@/lib/db";
import { sendAdminNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, jsonResponse } from "@/lib/utils";
import { consultationSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const ipAddress = getClientIp(request);
    const rate = await checkRateLimit({ key: `consultation:${ipAddress}`, ...PUBLIC_FORM_RATE_LIMIT });
    if (!rate.allowed) {
      return jsonResponse(false, "Too many requests. Please try again later.", undefined, 429);
    }

    const parsed = await parseAndValidate(request, consultationSchema);
    if (parsed.error) return parsed.error;

    const payload = parsed.data;
    if (payload.website) return jsonResponse(true, "Request received.");

    const record = await db.consultationBooking.create({
      data: {
        fullName: payload.fullName,
        companyName: payload.companyName || null,
        email: payload.email,
        phone: payload.phone,
        preferredMethod: payload.preferredMethod,
        preferredDate: new Date(payload.preferredDate),
        preferredTime: payload.preferredTime,
        projectType: payload.projectType,
        projectDescription: payload.projectDescription,
        ipAddress,
        userAgent: request.headers.get("user-agent") || null
      }
    });

    await sendAdminNotification({
      subject: `New Consultation Booking #${record.id}`,
      html: `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${record.fullName}</p>
      <p><strong>Company:</strong> ${record.companyName ?? "-"}</p>
      <p><strong>Email:</strong> ${record.email}</p>
      <p><strong>Phone:</strong> ${record.phone}</p>
      <p><strong>Preferred Date:</strong> ${record.preferredDate.toISOString().slice(0, 10)}</p>
      <p><strong>Preferred Time:</strong> ${record.preferredTime}</p>
      <p><strong>Method:</strong> ${record.preferredMethod}</p>
      <p><strong>Description:</strong> ${record.projectDescription}</p>
      `
    });

    return jsonResponse(true, "Consultation booking submitted successfully.", { id: record.id }, 201);
  } catch {
    return handleServerError();
  }
}