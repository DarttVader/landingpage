import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "accent";
}

export function Badge({ className = "", variant = "primary", children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent-dark",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}