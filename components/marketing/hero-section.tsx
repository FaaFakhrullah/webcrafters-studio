import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { AgencyMockup } from "@/components/marketing/agency-mockup";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const trustKeywords = ["Secure Development", "Responsive Design", "SEO Ready", "Admin Dashboard", "Maintenance Support"];

export function HeroSection() {
  return (
    <section className="dark-section relative overflow-hidden">
      <div className="container-shell page-section grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal>
          <p className="accent-kicker mb-4">
            Premium Malaysian Web Development Agency
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Premium Website & Web System Development for Malaysian Businesses
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            We design and build secure, responsive, and scalable websites, dashboards, and custom web applications for SMEs,
            agencies, NGOs, and organizations that need reliable digital solutions.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/request-quotation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 sm:w-auto">
                Request a Website Quotation
              </Button>
            </Link>
            <Link href="/packages" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/15 sm:w-auto">
                View Packages
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-teal-500 text-white hover:bg-teal-400 sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustKeywords.map((keyword) => (
              <div key={keyword} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                {keyword}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <AgencyMockup />
        </Reveal>
      </div>
    </section>
  );
}
