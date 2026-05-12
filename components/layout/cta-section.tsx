import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="page-section">
      <div className="container-shell">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-6 py-12 text-white md:px-10">
          <h2 className="font-display text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-100">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/request-quotation">
              <Button className="bg-white text-slate-900 hover:bg-slate-100">Request a Website</Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}