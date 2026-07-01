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

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

const card = (service: (typeof services)[0]) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="group h-full rounded-3xl border border-(--border) bg-(--card) p-8 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
        <Icon size={34} className="text-(--primary)" />
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-(--foreground)">
        {service.title}
      </h3>

      <p className="leading-7 text-(--muted)">
        {service.description}
      </p>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="bg-(--background) py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            centered
            subtitle="OUR SERVICES"
            title="Travel Solutions For Every Journey"
          />
        </motion.div>

        {/* Mobile Carousel */}
        <div className="mt-16 md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                {card(service)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet & Desktop Grid */}
        <div className="mt-16 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              {card(service)}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
