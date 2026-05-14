import { ShieldCheck, Smartphone, Timer, MapPinned } from "lucide-react";

import { StaggeredReveal } from "@/components/motion/reveal";

const badgeConfig = [
  { icon: Timer, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "Secure Development" },
  { icon: Smartphone, label: "Mobile Responsive" },
  { icon: MapPinned, label: "Malaysian Business Friendly" }
];

export function TrustBadges() {
  return (
    <section className="page-section pt-8">
      <StaggeredReveal className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={70}>
        {badgeConfig.map((badge) => (
          <div key={badge.label} className="motion-card flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
            <badge.icon className="h-5 w-5 text-secondary" />
            <p className="text-sm font-semibold text-slate-700">{badge.label}</p>
          </div>
        ))}
      </StaggeredReveal>
    </section>
  );
}
