import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type PortfolioCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

export function PortfolioCard({ title, category, description, technologies, imageUrl }: PortfolioCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full bg-slate-100">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge variant="outline">{category}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{description}</p>
        <p className="mt-3 text-sm text-slate-700">
          <span className="font-semibold">Technologies:</span> {technologies.join(", ")}
        </p>
      </CardContent>
      <CardFooter>
        <Link href="/contact" className="w-full">
          <Button variant="outline" className="w-full">
            View details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}