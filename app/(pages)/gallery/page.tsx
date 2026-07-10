import GallerySection from '@/components/gallery/GallerySection'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery showcasing Bellmare Holidays' luxury buses, travel experiences, group tours, corporate trips, and memorable journeys across Kerala.",
};

const page = () => {
  return (
    <div>
      <GallerySection />
    </div>
  )
}

export default page
