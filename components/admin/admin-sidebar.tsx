import Link from "next/link";

const items = [
  ["/admin", "Dashboard"],
  ["/admin/quotations", "Quotations"],
  ["/admin/consultations", "Consultations"],
  ["/admin/messages", "Messages"],
  ["/admin/services", "Services"],
  ["/admin/packages", "Packages"],
  ["/admin/portfolio", "Portfolio"],
  ["/admin/testimonials", "Testimonials"],
  ["/admin/faqs", "FAQs"],
  ["/admin/settings", "Settings"]
] as const;

export function AdminSidebar() {
  return (
    <aside className="w-full border-b border-border bg-slate-900 p-4 text-slate-100 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <p className="font-display text-lg font-bold">WebCrafters Admin</p>
      <nav className="mt-4 grid gap-1">
        {items.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm hover:bg-slate-800">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}