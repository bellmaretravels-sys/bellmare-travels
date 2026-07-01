import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400",
        className
      )}
    >
      {children}
    </span>
  );
}
