"use client";

import { motion } from "framer-motion";
import {
  Users,
  Snowflake,
  Wifi,
  Tv,
  BatteryCharging,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const fleet = [
  {
    name: "Luxury Coach",
    image: "/images/gallery/gallery6.png",
    seats: "49 Seats",
    description:
      "Premium coach designed for long-distance tours with maximum comfort and modern amenities.",
    features: ["Air Conditioning", "Wi-Fi", "LED TV", "USB Charging"],
  },
  {
    name: "Executive Mini Bus",
    image: "/images/gallery/gallery2.png",
    seats: "27 Seats",
    description:
      "Perfect for family trips, airport transfers, and corporate transportation.",
    features: ["Air Conditioning", "Comfort Seats", "Music System"],
  },
  {
    name: "Tourist Coach",
    image: "/images/bus/bus-img-bright1.png",
    seats: "40 Seats",
    description:
      "Spacious coach suitable for school excursions, pilgrimages, and group tours.",
    features: ["Air Conditioning", "Large Luggage Space", "Reclining Seats"],
  },
];

const featureIcons: Record<string, React.ElementType> = {
  "Air Conditioning": Snowflake,
  "Wi-Fi": Wifi,
  "LED TV": Tv,
  "USB Charging": BatteryCharging,
  "Comfort Seats": Users,
  "Music System": Tv,
  "Large Luggage Space": Users,
  "Reclining Seats": Users,
};

export default function FleetSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Fleet
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Travel in Comfort & Style
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our fleet is maintained to the highest standards, ensuring every
            journey is safe, comfortable, and enjoyable. From luxury coaches to
            executive minibuses, we have the perfect vehicle for every occasion.
          </p>
        </motion.div>

        {/* Fleet Cards */}
        <div className="mt-20 space-y-16">
          {fleet.map((bus, index) => (
            <motion.div
              key={bus.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`grid gap-10 overflow-hidden rounded-3xl bg-white shadow-lg lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center p-10">
                <h3 className="text-3xl font-bold text-slate-900">
                  {bus.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-blue-600">
                  <Users size={20} />
                  <span className="font-semibold">{bus.seats}</span>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {bus.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {bus.features.map((feature) => {
                    const Icon = featureIcons[feature];

                    return (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl bg-slate-100 p-3"
                      >
                        <Icon className="text-blue-600" size={20} />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <button className="mt-10 flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Enquire This Vehicle
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-blue-600 px-8 py-16 text-center text-white"
        >
          <h3 className="text-3xl font-bold">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Whether you're planning a family vacation, corporate event,
            pilgrimage, or school trip, our team will help you select the
            perfect vehicle for your journey.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
