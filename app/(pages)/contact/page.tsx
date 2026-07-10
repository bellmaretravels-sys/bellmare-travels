import ContactSection from '@/components/contact/ContactSection'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bellmare Holidays for tourist bus bookings, travel inquiries, airport transfers, corporate transportation, and customized travel packages across Kerala.",
};

const page = () => {
  return (
    <div>
      <ContactSection />
    </div>
  )
}

export default page
