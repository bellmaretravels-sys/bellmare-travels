"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Snowflake, Wifi } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const fleet = [
  {
    id: 1,
    name: "Executive Mini Coach",
    image: "/images/bus/bus1.png",
    seats: "35 Seater",
    features: ["AC", "WiFi", "Charging Port"],
  },
  {
    id: 2,
    name: "Premium Tourist Bus",
    image: "/images/bus/bus2.png",
    seats: "49 Seater",
    features: ["AC", "Luxury Seats", "Music"],
  },
  {
    id: 3,
    name: "Luxury Coach",
    image: "/images/bus/bus3.png",
    seats: "49 Seater",
    features: ["AC", "Comfort Seats", "LED TV"],
  },
];

export default function Fleet() {
  return (
    <section className="bg-(--background) py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <Container>
        <SectionHeading
          centered
          subtitle="OUR FLEET"
          title="Travel in Comfort with Our Premium Buses"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((bus, index) => (
            <motion.div
              key={bus.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-(--border) bg-(--card) transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-(--card)">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-(--foreground)">
                  {bus.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-(--primary)">
                  <Users size={18} />
                  <span>{bus.seats}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {bus.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-2 text-sm text-(--primary)"
                    >
                      {feature === "AC" && <Snowflake size={16} />}
                      {feature === "WiFi" && <Wifi size={16} />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <Button className="mt-8 flex w-full items-center justify-center gap-2">
                  View Details
                  <ArrowRight size={18} />
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
