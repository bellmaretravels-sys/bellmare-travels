import AboutSection from '@/components/about/AboutSection'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bellmare Holidays, our commitment to safe, reliable, and comfortable tourist bus rental services, and our mission to provide exceptional travel experiences across Kerala.",
};

const page = () => {
  return (
    <div>
      <AboutSection />
    </div>
  )
}

export default page
