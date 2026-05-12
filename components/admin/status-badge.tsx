import { ContactStatus, ConsultationStatus, InquiryStatus } from "@prisma/client";

import { Badge } from "@/components/ui/badge";

export function StatusBadge({ status }: { status: InquiryStatus | ConsultationStatus | ContactStatus | string }) {
  const value = String(status);

  if (["COMPLETED", "READ"].includes(value)) return <Badge variant="success">{value.replaceAll("_", " ")}</Badge>;
  if (["REJECTED", "CANCELLED"].includes(value)) return <Badge variant="outline">{value.replaceAll("_", " ")}</Badge>;
  if (["NEW", "UNREAD"].includes(value)) return <Badge>{value.replaceAll("_", " ")}</Badge>;

  return <Badge variant="secondary">{value.replaceAll("_", " ")}</Badge>;
}