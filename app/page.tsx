import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Admissions from "@/components/sections/Admissions";
import Awards from "@/components/sections/Awards";
import Campus from "@/components/sections/Campus";
import Experiences from "@/components/sections/Experiences";
import Hero from "@/components/sections/Hero";
import Sports from "@/components/sections/Sports";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import WhyTis from "@/components/sections/WhyTis";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Experiences />
        <Sports />
        <WhyTis />
        <Campus />
        <Testimonials />
        <Awards />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}