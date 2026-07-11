"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import ThemeToggle from "../common/ThemeToggle";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/components/common/Button";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const phoneNumber = "9847698881"; // Replace with your number
  const message = encodeURIComponent(
    "Hi! I'm interested in your travel packages."
  );

  return (
    <>
      <nav className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button>
              <a href={`https://wa.me/${phoneNumber}?text=${message}`}>
              Book Now
              </a>
              </Button>
          </div>

          {/* Theme Toggle */}
          {isHomePage && <ThemeToggle />}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-(--card) lg:hidden"
            aria-label="Open Menu"
          >
            <Menu
              size={24}
              className="text-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
