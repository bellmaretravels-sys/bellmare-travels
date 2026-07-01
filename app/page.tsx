import CTA from "@/components/home/Cta/Cta";
import Gallery from "@/components/home/Gallery/Gallery";
import Hero from "@/components/home/Hero/Hero";
import Fleet from "@/components/home/OurFleet/Fleet";
import Services from "@/components/home/Services/Services";
import Testimonials from "@/components/home/Testimony/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUS/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Fleet />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
}
