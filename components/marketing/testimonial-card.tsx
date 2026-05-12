import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  clientName: string;
  companyName: string;
  role: string;
  message: string;
  rating: number;
};

export function TestimonialCard({ clientName, companyName, role, message, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <p className="text-yellow-500">{"*".repeat(rating)}</p>
        <p className="mt-3 text-sm text-slate-700">\"{message}\"</p>
        <p className="mt-4 font-semibold text-slate-900">{clientName}</p>
        <p className="text-xs text-slate-500">
          {role}, {companyName}
        </p>
      </CardContent>
    </Card>
  );
}