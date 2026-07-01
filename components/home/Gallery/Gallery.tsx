"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

const galleryImages = [
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery3.png",
  "/images/gallery/gallery4.png",
  "/images/gallery/gallery5.png",
  "/images/gallery/gallery6.png",
];

export default function Gallery() {
  return (
    <section className="bg-(--background) py-16 transition-colors duration-300 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          centered
          subtitle="OUR GALLERY"
          title="Travel Moments That Inspire"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-(--muted)">
          Explore our luxury fleet, memorable journeys, and comfortable travel
          experiences across Kerala.
        </p>
      </Container>

      {/* Gallery */}
      <div className="relative mt-16">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-(--background) to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-(--background) to-transparent" />

        <Swiper
          modules={[Autoplay]}
          loop
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {galleryImages.concat(galleryImages).map((image, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-(--border)">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white">
                    Bellmare Travels
                  </h3>

                  <p className="mt-2 text-sm text-zinc-300">
                    Premium Travel Experience
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container>
        <div className="mt-14 flex justify-center">
          <Button className="flex items-center gap-2">
            View Full Gallery
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
