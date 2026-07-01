"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Cyan Blob */}
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

      {/* Blue Blob */}
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      <Container>
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-cyan-400 backdrop-blur-sm"
          >
            Book Your Journey
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-8 text-4xl font-bold leading-tight md:text-6xl"
          >
            Ready For Your
            <span className="block text-cyan-400">
              Next Adventure?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300"
          >
            Whether it's a family trip, corporate event, wedding,
            airport transfer, or a Kerala tour, Bellmare Travels is
            ready to make your journey safe, comfortable, and
            memorable.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Button className="flex items-center gap-2">
                Book Now
                <ArrowRight size={18} />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
              >
                <PhoneCall size={18} />
                +91 98765 43210
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
