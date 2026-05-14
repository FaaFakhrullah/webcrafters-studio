import { BriefcaseBusiness, Code2, MapPinned, ShieldCheck, Smartphone } from "lucide-react";

import { StaggeredReveal } from "@/components/motion/reveal";

const badgeConfig = [
  { icon: MapPinned, label: "Malaysian-focused digital solutions" },
  { icon: ShieldCheck, label: "Secure and maintainable code" },
  { icon: Smartphone, label: "Mobile-first design" },
  { icon: BriefcaseBusiness, label: "Business-focused development" },
  { icon: Code2, label: "Website + web system capability" }
];

export function TrustBadges() {
  return (
    <section className="page-section pt-8">
      <StaggeredReveal className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={70}>
        {badgeConfig.map((badge) => (
          <div key={badge.label} className="motion-card flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
            <badge.icon className="h-5 w-5 text-secondary" />
            <p className="text-sm font-semibold text-slate-700">{badge.label}</p>
          </div>
        ))}
      </StaggeredReveal>
    </section>
  );
}
