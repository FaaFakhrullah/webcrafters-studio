import { NextRequest } from "next/server";

import { parseAndValidate, handleServerError } from "@/lib/api";
import { PUBLIC_FORM_RATE_LIMIT } from "@/lib/constants";
import { db } from "@/lib/db";
import { sendAdminNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, jsonResponse } from "@/lib/utils";
import { quotationSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const ipAddress = getClientIp(request);
    const rate = await checkRateLimit({
      key: `quotation:${ipAddress}`,
      ...PUBLIC_FORM_RATE_LIMIT
    });

    if (!rate.allowed) {
      return jsonResponse(false, "Too many requests. Please try again later.", undefined, 429);
    }

    const parsed = await parseAndValidate(request, quotationSchema);
    if (parsed.error) return parsed.error;

    const payload = parsed.data;

    if (payload.website) {
      return jsonResponse(true, "Request received.");
    }

    const record = await db.quotationRequest.create({
      data: {
        fullName: payload.fullName,
        companyName: payload.companyName || null,
        email: payload.email,
        phone: payload.phone,
        preferredContactMethod: payload.preferredContactMethod,
        projectType: payload.projectType,
        budgetRange: payload.budgetRange,
        timeline: payload.timeline,
        requiredFeatures: payload.requiredFeatures,
        existingWebsiteUrl: payload.existingWebsiteUrl || null,
        projectDescription: payload.projectDescription,
        fileUrl: payload.fileUrl || null,
        ipAddress,
        userAgent: request.headers.get("user-agent") || null
      }
    });

    await sendAdminNotification({
      subject: `New Quotation Request #${record.id}`,
      html: `
      <h2>New Quotation Request</h2>
      <p><strong>Name:</strong> ${record.fullName}</p>
      <p><strong>Company:</strong> ${record.companyName ?? "-"}</p>
      <p><strong>Email:</strong> ${record.email}</p>
      <p><strong>Phone:</strong> ${record.phone}</p>
      <p><strong>Project Type:</strong> ${record.projectType}</p>
      <p><strong>Budget:</strong> ${record.budgetRange}</p>
      <p><strong>Timeline:</strong> ${record.timeline}</p>
      <p><strong>Required Features:</strong> ${(record.requiredFeatures as string[]).join(", ")}</p>
      <p><strong>Description:</strong> ${record.projectDescription}</p>
      `
    });

    return jsonResponse(true, "Quotation request submitted successfully.", { id: record.id }, 201);
  } catch {
    return handleServerError();
  }
}