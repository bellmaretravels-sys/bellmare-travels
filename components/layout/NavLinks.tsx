"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils/cn";

interface NavLinksProps {
  mobile?: boolean;
  scrolled?: boolean;
  onNavigate?: () => void;
}

export default function NavLinks({
  mobile = false,
  onNavigate,
  scrolled = false,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex gap-8", mobile && "flex-col gap-6")}>
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "transition-colors duration-300 hover:text-(--primary)",
                active
                  ? "font-semibold text-(--primary)"
                  : scrolled
                    ? "text-(--foreground)"
                    : "text-white",
              )}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
