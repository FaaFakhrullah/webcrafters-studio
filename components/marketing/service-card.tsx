import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  timeline: string;
  startingPrice: string;
  category: string;
  suitableFor?: string;
};

export function ServiceCard({ title, description, features, timeline, startingPrice, category, suitableFor }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{category}</p>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-slate-700">
          {features.slice(0, 4).map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-800">Timeline:</span> {timeline}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Starting price:</span> {startingPrice}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Suitable for:</span> {suitableFor || `${category} teams and organizations`}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/request-quotation" className="w-full">
          <Button className="w-full">Request This Service</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}