import ServicesSection from '@/components/service/Service'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bellmare Holidays provides tourist bus rentals, airport transfers, corporate travel, wedding transportation, pilgrimage tours, school trips, and customized travel packages across Kerala.",
};

const page = () => {
  return (
    <div>
      <ServicesSection />
    </div>
  )
}

export default page
