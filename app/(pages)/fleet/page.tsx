import FleetSection from '@/components/fleet/Fleet'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Explore Bellmare Holidays' premium fleet of luxury tourist buses, coaches, and tempo travellers for family trips, corporate travel, weddings, and group tours across Kerala.",
};

const page = () => {
  return (
    <div>
      <FleetSection />
    </div>
  )
}

export default page
