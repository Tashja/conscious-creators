/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CorePillars from "./components/CorePillars";
import ParallaxSection from "./components/ParallaxSection";
import ClientsBanner from "./components/ClientsBanner";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import QuoteSection from "./components/QuoteSection";
import Freebie from "./components/Freebie";
import Masterclass from "./components/Masterclass";
import Community from "./components/Community";
import Coaching from "./components/Coaching";
import NewsletterSection from "./components/NewsletterSection";
import CustomCursor from "./components/CustomCursor";
import IntroOverlay from "./components/IntroOverlay";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className={`min-h-screen selection:bg-brand-red selection:text-white ${isDesktop ? "cursor-none" : ""}`}>
      <IntroOverlay />
      {isDesktop && <CustomCursor />}
      <Navbar />
      <main>
        <Hero />
        <CorePillars />
        <ParallaxSection />
        <ClientsBanner />
        <Testimonials />
        <About />
        <QuoteSection />
        <Freebie />
        <Masterclass />
        <Community />
        <Coaching />
        <NewsletterSection />
      </main>
    </div>
  );
}
