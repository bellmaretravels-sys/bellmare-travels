import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center"
      )}
    >
      {subtitle && (
        <p className="mb-3 text-cyan-400 font-medium uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}
