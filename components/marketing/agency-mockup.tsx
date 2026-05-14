import { Activity, BarChart3, CheckCircle2, FileText, ShieldCheck, Smartphone } from "lucide-react";

const stats = [
  { label: "Leads", value: "+38%" },
  { label: "Pages", value: "12" },
  { label: "Status", value: "Live" }
];

export function AgencyMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
        <div className="rounded-xl border border-slate-700/80 bg-slate-950">
          <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="ml-3 h-7 flex-1 rounded-md bg-slate-900 px-3 py-1 text-xs text-slate-400">coreops.my/dashboard</div>
          </div>
          <div className="grid gap-3 p-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-3">
              <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-cyan-200">Digital Trust Score</p>
                    <p className="mt-2 text-3xl font-bold text-white">92%</p>
                  </div>
                  <ShieldCheck className="h-10 w-10 text-cyan-300" />
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-11/12 rounded-full bg-cyan-300" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                    <p className="text-xs text-slate-400">{stat.label}</p>
                    <p className="mt-1 font-display text-xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BarChart3 className="h-4 w-4 text-teal-300" />
                  Enquiry pipeline
                </div>
                <div className="mt-4 space-y-3">
                  {["Discovery call", "Quotation sent", "UI review"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-200">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-white p-3 text-slate-950">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase text-slate-500">Mobile view</p>
                  <Smartphone className="h-4 w-4 text-cyan-600" />
                </div>
                <div className="mt-3 rounded-lg bg-slate-950 p-3 text-white">
                  <p className="text-sm font-semibold">Premium agency site</p>
                  <p className="mt-2 text-xs text-slate-300">Fast, responsive, SEO-ready, and built for enquiries.</p>
                  <div className="mt-3 h-8 rounded-md bg-cyan-400" />
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileText className="h-4 w-4 text-cyan-300" />
                  Launch checklist
                </div>
                <div className="mt-3 space-y-2">
                  {["Responsive QA", "SEO metadata", "Security headers", "Form testing"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-teal-300/20 bg-teal-400/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-100">
                  <Activity className="h-4 w-4" />
                  Maintainable architecture
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-300">Designed for future content, features, and business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
