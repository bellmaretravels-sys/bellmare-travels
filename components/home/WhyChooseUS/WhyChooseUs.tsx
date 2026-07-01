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

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <SectionHeading
          centered
          subtitle="WHY CHOOSE US"
          title="Travel With Confidence"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                  }}
                >
                  <Icon
                    size={32}
                    style={{ color: "var(--primary)" }}
                  />
                </div>

                <h3
                  className="mb-4 text-xl font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>

                <p style={{ color: "var(--muted)" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
