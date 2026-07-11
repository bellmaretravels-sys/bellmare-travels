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

      {/* Animated Cyan Blob */}
      <motion.div
        className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/50 blur-[140px]"
        animate={{
          x: [-100, 200, -100],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Animated Blue Blob */}
      <motion.div
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-400/40 blur-[120px]"
        animate={{
          x: [100, -150, 100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" /> */}

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-cyan-400 backdrop-blur-sm"
          >
            Book Your Journey
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mt-8 text-4xl font-bold leading-tight md:text-6xl text-cyan-600"
          >
            Ready For Your
            <span className="block text-cyan-400">Next Adventure?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 lg:text-zinc-500 text-white"
          >
            Whether it's a family trip, corporate event, wedding, airport
            transfer, or a Kerala tour, Bellmare Travels is ready to make your
            journey safe, comfortable, and memorable.
          </motion.p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="flex items-center gap-2">
                Book Now
                <ArrowRight size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 border-white/30 bg-black/60 text-white backdrop-blur-sm hover:bg-black/50"
              >
                <a href="tel:+919847698881" className="flex">
                  <PhoneCall size={18} />
                  +91 9847776640
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
