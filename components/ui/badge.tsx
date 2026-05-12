import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "success";
};

const variants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-slate-100 text-slate-700",
  outline: "border border-border text-slate-700",
  success: "bg-emerald-100 text-emerald-700"
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", variants[variant], className)}
      {...props}
    />
  );
}