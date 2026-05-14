import { StaggeredReveal } from "@/components/motion/reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <StaggeredReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={75}>
      {PROCESS_STEPS.map((step, index) => (
        <div key={step} className="motion-card rounded-xl border border-border bg-white p-4 shadow-soft">
          <p className="text-xs font-semibold text-secondary">Step {index + 1}</p>
          <p className="mt-2 font-semibold text-slate-800">{step}</p>
        </div>
      ))}
    </StaggeredReveal>
  );
}
