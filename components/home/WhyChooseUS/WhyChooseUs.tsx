"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Bus,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Well-maintained buses with experienced drivers for a secure journey.",
  },
  {
    icon: Clock3,
    title: "Always On Time",
    description:
      "Reliable transportation with punctual pickups and drop-offs.",
  },
  {
    icon: Bus,
    title: "Luxury Fleet",
    description:
      "Modern AC coaches with premium seating and onboard comfort.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Friendly staff dedicated to providing a smooth travel experience.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -90,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
      delay: 0.2,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            centered
            subtitle="WHY CHOOSE US"
            title="Travel With Confidence"
          />
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="rounded-2xl border p-8 shadow-sm transition-all duration-300"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--primary) 12%, transparent)",
                  }}
                >
                  <Icon
                    size={32}
                    style={{ color: "var(--primary)" }}
                  />
                </motion.div>

                <h3
                  className="mb-4 text-xl font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
