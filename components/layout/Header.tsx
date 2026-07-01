"use client";

import { useEffect, useState } from "react";

import Container from "@/components/common/Container";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-2 transition-all duration-300",
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
          : "bg-transparent"
      )}
    >
      <Container>
        <Navbar scrolled={scrolled} />
      </Container>
    </header>
  );
}
