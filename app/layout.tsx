import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Bellmare Holidays | Tourist Bus Rental in Kerala",
    template: "%s | Bellmare Holidays",
  },

  description:
    "Bellmare Holidays offers premium tourist bus rentals, group tours, family trips, airport transfers and corporate travel across Kerala.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bellmare Holidays",
    description:
      "Premium tourist bus rental and travel services across Kerala.",
    url: siteConfig.url,
    siteName: "Bellmare Holidays",
    type: "website",
  },

  keywords: [
  "tourist bus rental Kerala",
  "bus rental Kochi",
  "luxury bus rental",
  "group travel Kerala",
  "Bellmare Holidays",
],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
