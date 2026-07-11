"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/gallery/gallery1.png",
    title: "Luxury Coach",
  },
  {
    src: "/images/gallery/gallery2.png",
    title: "Family Tour",
  },
  {
    src: "/images/gallery/gallery3.png",
    title: "Corporate Travel",
  },
  {
    src: "/images/gallery/gallery4.png",
    title: "Pilgrimage Tour",
  },
  {
    src: "/images/gallery/gallery5.png",
    title: "Tourist Destination",
  },
  {
    src: "/images/gallery/gallery6.png",
    title: "Airport Transfer",
  },
  {
    src: "/images/gallery/gallery12.jpeg",
    title: "School trip",
  },
  {
    src: "/images/gallery/gallery7.jpeg",
    title: "Group Tour",
  },
  {
    src: "/images/gallery/gallery8.jpeg",
    // title: "Group Tour",
  },
  {
    src: "/images/gallery/gallery9.jpeg",
    // title: "Group Tour",
  },
  {
    src: "/images/gallery/gallery10.jpeg",
    // title: "Group Tour",
  },
  {
    src: "/images/gallery/gallery11.jpeg",
    // title: "Group Tour",
  },
  {
    src: "/images/gallery/gallery13.jpeg",
    // title: "Group Tour",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Memories From Every Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore moments captured during our tours, corporate trips, family
            vacations, pilgrimages, and more. Every journey tells a story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title ?? "Gallery Image"}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
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
            Ready to Create Your Own Travel Memories?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Join Bellmare Travels and experience comfortable journeys,
            breathtaking destinations, and unforgettable moments with your
            family, friends, or colleagues.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Book Your Trip
          </button>
        </motion.div>
      </div>
    </section>
  );
}
