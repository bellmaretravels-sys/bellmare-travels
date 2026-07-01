"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "@/components/common/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-(--border) bg-(--background) shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-(--border) p-6">
              <Logo scrolled />

              <button
                onClick={onClose}
                className="rounded-lg p-2 transition hover:bg-(--card)"
                aria-label="Close Menu"
              >
                <X
                  size={22}
                  className="text-(--foreground)"
                />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <NavLinks
                mobile
                scrolled
                onNavigate={onClose}
              />
            </div>

            {/* Footer CTA */}
            <div className="border-t border-(--border) p-6">
              <Button
                className="w-full"
                onClick={onClose}
              >
                Book Now
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
