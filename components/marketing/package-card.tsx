import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type PackageCardProps = {
  name: string;
  description: string;
  features: string[];
  priceLabel: string;
  deliveryTimeline: string;
  bestFor: string;
  isPopular?: boolean;
};

export function PackageCard({
  name,
  description,
  features,
  priceLabel,
  deliveryTimeline,
  bestFor,
  isPopular = false
}: PackageCardProps) {
  return (
    <Card className="motion-card h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{name}</CardTitle>
          {isPopular && <Badge variant="success">Popular</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold text-primary">{priceLabel}</p>
        <p className="mt-1 text-sm text-slate-600">Delivery: {deliveryTimeline}</p>
        <p className="mt-1 text-sm text-slate-600">Best for: {bestFor}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/request-quotation" className="w-full">
          <Button className="w-full">Get Quotation</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
