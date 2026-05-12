import { ZodSchema } from "zod";

import { jsonResponse } from "@/lib/utils";

export async function parseAndValidate<T>(request: Request, schema: ZodSchema<T>) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return { error: jsonResponse(false, "Validation failed", parsed.error.flatten(), 400) };
    }
    return { data: parsed.data };
  } catch {
    return { error: jsonResponse(false, "Invalid JSON payload", undefined, 400) };
  }
}

export function handleServerError() {
  return jsonResponse(false, "An unexpected error occurred. Please try again later.", undefined, 500);
}