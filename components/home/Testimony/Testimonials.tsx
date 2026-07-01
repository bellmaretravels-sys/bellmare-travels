"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Family Trip",
    review:
      "Exceptional service! The bus was spotless, the driver was professional, and our entire family had a comfortable journey.",
  },
  {
    id: 2,
    name: "Rahul Nair",
    role: "Corporate Client",
    review:
      "Bellmare Travels handled our corporate transportation perfectly. On-time service and luxury buses.",
  },
  {
    id: 3,
    name: "Anjali Thomas",
    role: "Wedding Event",
    review:
      "Highly recommended! They managed transportation for our wedding guests flawlessly.",
  },
  {
    id: 4,
    name: "Sreejith Raj",
    role: "Tour Package",
    review:
      "Excellent experience from booking to drop-off. The bus was luxurious and the staff were very friendly.",
  },
  {
    id: 5,
    name: "Nikhil Das",
    role: "College Tour",
    review:
      "Our students had a safe and enjoyable journey. We'll definitely book Bellmare Travels again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-(--background) py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <Container>
        <SectionHeading
          centered
          subtitle="TESTIMONIALS"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-16 pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full rounded-3xl border border-(--border) bg-(--card) p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Rating */}
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="leading-8 text-(--muted)">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="mt-8">
                  <h4 className="font-semibold text-(--foreground)">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-(--primary)">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
