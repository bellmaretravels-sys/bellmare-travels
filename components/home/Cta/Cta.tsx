"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Image */}
<div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center" />

{/* Base Dark Overlay */}
<div className="absolute inset-0 bg-black/60" />

{/* Animated Cyan Blob */}
<motion.div
  className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[140px]"
  animate={{
    x: [-100, 200, -100],
    y: [0, 100, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Animated Blue Blob */}
<motion.div
  className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-400/15 blur-[120px]"
  animate={{
    x: [100, -150, 100],
    y: [50, -50, 50],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Optional Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center text-white"
        >
          {/* Badge */}
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
            Book Your Journey
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Ready For Your
            <span className="block text-cyan-400">
              Next Adventure?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Whether it's a family trip, corporate event, wedding,
            airport transfer, or a Kerala tour, Bellmare Travels is ready
            to make your journey safe, comfortable, and memorable.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button className="flex items-center gap-2">
              Book Now
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              <PhoneCall size={18} />
              +91 98765 43210
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
