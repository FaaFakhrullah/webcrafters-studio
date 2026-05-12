import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { messageStatusSchema } from "@/lib/validations";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parsed = await parseAndValidate(request, messageStatusSchema);
  if (parsed.error) return parsed.error;

  const item = await db.contactMessage.update({
    where: { id: Number(id) },
    data: {
      status: parsed.data.status
    }
  });

  return jsonResponse(true, "Message updated", item);
}