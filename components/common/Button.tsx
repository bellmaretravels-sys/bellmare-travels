import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",

    outline:
      "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
