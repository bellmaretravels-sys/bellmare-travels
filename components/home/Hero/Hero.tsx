"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const slides = [
  {
    id: 1,
    image: "/images/bus/bus-img-bright1.png",
    badge: "Premium Tourist Bus",
    title: "Travel In",
    highlight: "Comfort & Style",
    description:
      "Luxury tourist buses for family trips, holidays, and group tours across Kerala.",
  },
  {
    id: 2,
    image: "/images/bus/bus-img-bright2.png",
    badge: "Corporate Travel",
    title: "Reliable",
    highlight: "Corporate Transport",
    description:
      "Professional transportation solutions for corporate events, meetings, and employee travel.",
  },
  {
    id: 3,
    image: "/images/bus/bus3.png",
    badge: "Wedding & Events",
    title: "Make Every",
    highlight: "Journey Memorable",
    description:
      "Luxury buses for weddings, pilgrimages, school tours, and special occasions.",
  },
];

export default function Hero() {
  const phoneNumber = "9847698881"; // Replace with your number
  const message = encodeURIComponent(
    "Hi! I'm interested in your travel packages.",
  );
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen pt-10">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* <div
                className="absolute inset-0"
                style={{
                  background: "var(--hero-overlay)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: "var(--hero-gradient)",
                }}
              /> */}

              <Container className="relative z-10 flex h-full items-center">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl sm:px-0 px-6 text-white"
                >
                  {/* Badge */}
                  <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
                    {slide.badge}
                  </span>

                  <div className="p-5 mt-3 bg-black/40">
                    {/* Heading */}
                    <h1 className="text-2xl font-extrabold leading-tight lg:text-5xl">
                      {slide.title}

                      <span className="mt-2 block">{slide.highlight}</span>
                    </h1>
                    {/* Description */}
                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
                      {slide.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button className="flex items-center gap-2">
                      <a href={`https://wa.me/${phoneNumber}?text=${message}`}>
                        Book Now
                      </a>
                      <ArrowRight size={18} />
                    </Button>

                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-black"
                    >
                      <PhoneCall size={18} />
                      <a href="tel:+919847698881" className="flex">
                        Call Us
                      </a>
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="mt-16 grid max-w-md grid-cols-3 gap-8">
                    <div className="bg-black/35 p-3">
                      <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold text-cyan-400">
                        10+
                      </h3>
                      <p className="mt-2 text-sm text-gray-300">
                        Years Experience
                      </p>
                    </div>

                    <div className="bg-black/35 p-3">
                      <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold text-cyan-400">
                        250+
                      </h3>
                      <p className="mt-2 text-sm text-gray-300">Happy Trips</p>
                    </div>

                    <div className="bg-black/35 p-3">
                      <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold text-cyan-400">
                        5000+
                      </h3>
                      <p className="mt-2 text-sm text-gray-300">
                        Happy Travelers
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
