"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import ThemeToggle from "../common/ThemeToggle";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/components/common/Button";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavLinks scrolled={scrolled} />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button>Book Now</Button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-(--card) lg:hidden"
            aria-label="Open Menu"
          >
            <Menu
              size={24}
              className={scrolled ? "text-(--foreground)" : "text-white"}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
