import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    label: "1:1 ALIGNMENT COACHING",
    heading: "Come back to your unlimited essence",
    subheading: "BREAK FREE FROM OLD PATTERNS, EMBODY YOUR AUTHENTIC SELF, AND DESIGN A LIFE THAT FEELS LIKE HOME.",
    body: "This 1:1 coaching is an immersive, intimate and intuitive journey tailored to YOU. Together, we'll uncover the hidden stories shaping your reality, release what no longer serves you, and craft a path that aligns with your deepest truth. If you're tired of feeling stuck in cycles of your old self, longing for breakthroughs and realignment, this is your call."
  },
  {
    label: "WHAT YOU'LL EXPERIENCE",
    items: [
      "Building a safe intimate relationship which offers the container for you to become aware and make quantum shifts in a short time",
      "The confidence to show up fully and unapologetically and finally give yourself the permission to go after what you want",
      "Clarity on your purpose, your unique gifts and how to embody and express them fully"
    ]
  },
  {
    label: "YOUR TRANSFORMATION",
    items: [
      "Deep subconscious reprogramming to release the old identity and step into the version of you that already has what you desire",
      "A life and business that feels aligned, authentic and expansive"
    ],
    closing: "This is your call."
  }
];

export default function Coaching() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="work" className="min-h-screen flex flex-col md:flex-row bg-brand-beige overflow-hidden">
      {/* Left Column: Hero Image */}
      <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-screen relative px-5 md:px-0 pt-6 md:pt-0">
        <div className="relative w-full h-full">
          <img 
            src="https://i.postimg.cc/wvTM6D8f/SCR_20260410_tfsd.jpg" 
            alt="Coaching Hero" 
            className="absolute inset-0 w-full h-full object-cover [object-position:45%_15%] rounded-2xl md:rounded-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Right Column: Carousel */}
      <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen flex flex-col bg-brand-beige px-6 sm:px-8 py-10 md:py-16 relative overflow-y-auto">
        <div className="flex-1 relative overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col"
            >
              <span className="font-archivo font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-brand-red/60 mb-4 sm:mb-6 block">
                {slides[currentSlide].label}
              </span>

              {currentSlide === 0 && (
                <div className="flex flex-col">
                  <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl text-brand-red mb-3 sm:mb-4 leading-tight">
                    {slides[currentSlide].heading}
                  </h2>
                  <h3 className="font-archivo font-black uppercase text-brand-red text-[10px] sm:text-xs tracking-wide mb-3 sm:mb-4">
                    {slides[currentSlide].subheading}
                  </h3>
                  <p className="font-inter font-light text-xs sm:text-sm text-brand-red leading-relaxed opacity-90">
                    {slides[currentSlide].body}
                  </p>
                </div>
              )}

              {(currentSlide === 1 || currentSlide === 2) && (
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {slides[currentSlide].items?.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-brand-red font-inter font-light text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-brand-red mt-1.5 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {slides[currentSlide].closing && (
                    <p className="font-playfair italic text-brand-red text-xl mt-8">
                      {slides[currentSlide].closing}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & CTA */}
        <div className="mt-auto pt-8">
          <div className="flex items-center justify-end gap-4 mb-6">
            <span className="font-inter text-xs text-brand-red/50">
              0{currentSlide + 1} / 03
            </span>
            <button 
              onClick={nextSlide}
              className="text-brand-red hover:opacity-70 transition-opacity p-1"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <a href="https://calendly.com/natashjadenteuling/30-minute-intake-call-alignment-coaching" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-red text-[#F5F0E8] font-archivo font-black uppercase py-4 rounded-[4px] tracking-[-0.03em] shadow-lg shadow-brand-red/10 text-sm sm:text-base"
            >
              BOOK YOUR INTAKE CALL
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
