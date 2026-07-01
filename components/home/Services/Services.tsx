"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  Plane,
  Mountain,
  GraduationCap,
  Church,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    title: "Corporate Travel",
    description:
      "Reliable transportation solutions for business meetings, conferences and corporate events.",
    icon: Building2,
  },
  {
    title: "Wedding Transport",
    description:
      "Luxury buses for weddings, receptions and family gatherings with premium comfort.",
    icon: Heart,
  },
  {
    title: "Airport Transfers",
    description:
      "On-time airport pickups and drop-offs with comfortable and spacious coaches.",
    icon: Plane,
  },
  {
    title: "Tour Packages",
    description:
      "Customized Kerala tour packages for families, friends and corporate groups.",
    icon: Mountain,
  },
  {
    title: "School & College Trips",
    description:
      "Safe and comfortable buses for educational tours, excursions and events.",
    icon: GraduationCap,
  },
  {
    title: "Pilgrimage Tours",
    description:
      "Comfortable travel arrangements for religious and pilgrimage destinations.",
    icon: Church,
  },
];

export default function Services() {
  return (
    <section className="bg-(--background) py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <Container>
        <SectionHeading
          centered
          subtitle="OUR SERVICES"
          title="Travel Solutions For Every Journey"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-(--border) bg-(--card) p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon
                    size={34}
                    className="text-(--primary)"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold text-(--foreground)">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-(--muted)">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
