import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Container from "@/components/common/Container";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Corporate Travel",
  "Wedding Transport",
  "Airport Transfer",
  "Tour Packages",
  "School Trips",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 leading-7 text-[var(--muted)]">
              Bellmare Travels provides premium luxury bus rental and travel
              services across Kerala with comfort, safety and reliability.
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaWhatsapp, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] p-3 transition-all duration-300 hover:scale-110 hover:bg-[var(--primary)] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Our Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-[var(--muted)]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-[var(--primary)]" />

                <p className="text-[var(--muted)]">+91 9847776640</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-[var(--primary)]" />

                <p className="text-[var(--muted)]">+91 9847776641</p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-1 text-[var(--primary)]" />

                <p className="text-[var(--muted)]">bellmaretravels@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[var(--primary)]" />

                <p className="text-[var(--muted)]">
                  Edavanakkad, Ernakulam, Kerala
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-8 text-sm text-[var(--muted)] md:flex-row">
          <p>
            © {new Date().getFullYear()} Bellmare Travels. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
