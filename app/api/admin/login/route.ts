import { NextRequest } from "next/server";

import { createSessionToken, setSessionCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { comparePassword } from "@/lib/auth";
import { parseAndValidate } from "@/lib/api";
import { jsonResponse } from "@/lib/utils";
import { adminLoginSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, adminLoginSchema);
  if (parsed.error) return parsed.error;

  const user = await db.user.findUnique({ where: { email: parsed.data.email } });
  if (!user) {
    return jsonResponse(false, "Invalid credentials", undefined, 401);
  }

  const valid = await comparePassword(parsed.data.password, user.passwordHash);
  if (!valid) {
    return jsonResponse(false, "Invalid credentials", undefined, 401);
  }

  const token = await createSessionToken({ userId: user.id, email: user.email, role: user.role });
  await setSessionCookie(token);

  return jsonResponse(true, "Login successful", { email: user.email });
}