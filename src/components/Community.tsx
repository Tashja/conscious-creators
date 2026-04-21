import React, { useState, useRef } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";
import { cn } from "../lib/utils";

const plans = [
  {
    title: "Conscious Creators Collective",
    price: "FREE",
    subtitle: "(Temporary free)",
    description: "A free community for conscious creators to connect, share and grow together. Apply spiritual teachings in daily life and build positive momentum through proximity.",
    features: [
      "Access to the Conscious Creators community on Skool",
      "Connect with like-minded people on the same path",
      "Weekly teachings, insights and inspiration",
      "Surround yourself with high value people"
    ],
    cta: "JOIN NOW",
    link: "https://www.skool.com/conscious-creators-6123/about"
  },
  {
    title: "Conscious Creators Mastery",
    price: "€997",
    subtitle: "(Instalments possible)",
    subline: "Everything you desire already exists. This is your roadmap to get there.",
    description: "A complete roadmap to go from unconscious incompetent to unconscious competent conscious creator. With in-depth video content, live support and a community of like-minded people.",
    features: [
      "Complete step-by-step video curriculum",
      "Monthly Q&A sessions with Tashja",
      "Weekly live calls with guest teachers",
      "Lifetime access to all content & updates",
      "Private community access included"
    ],
    cta: "GET NOTIFIED",
    isComingSoon: true
  }
];

export default function Community() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mastery Waitlist State
  const [showMasteryForm, setShowMasteryForm] = useState(false);
  const [masteryName, setMasteryName] = useState("");
  const [masteryEmail, setMasteryEmail] = useState("");
  const [masteryPhone, setMasteryPhone] = useState("");
  const [masteryLoading, setMasteryLoading] = useState(false);
  const [masterySubmitted, setMasterySubmitted] = useState(false);

  const handleMasterySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMasteryLoading(true);

    try {
      const response = await fetch('/api/mastery-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: masteryName, email: masteryEmail, phone: masteryPhone })
      });

      if (response.ok) {
        setMasterySubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to join mastery waitlist:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setMasteryLoading(false);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    
    // Calculate index based on scroll position
    const totalPossibleScroll = scrollWidth - offsetWidth;
    if (totalPossibleScroll <= 0) return;
    
    const index = Math.round((scrollLeft / totalPossibleScroll) * (plans.length - 1));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="community" className="py-16 sm:py-24 px-6 md:px-12 lg:px-24 bg-brand-red text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-6xl mb-10 sm:mb-16 text-center text-[#F5F0E8] font-playfair tracking-[-0.01em]"
        >
          Join the Conscious Creators Community
        </motion.h2>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-12 md:overflow-visible scrollbar-hide"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="border border-white/30 p-6 sm:p-10 flex flex-col transition-colors rounded-lg active:scale-[0.98] snap-center shrink-0 w-[85vw] md:w-auto"
            >
              {plan.isComingSoon && (
                <span className="font-archivo font-black uppercase text-[#F5F0E8] border border-[#F5F0E8]/40 rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs tracking-[0.2em] inline-block mb-3 sm:mb-4 w-fit">
                  COMING SOON
                </span>
              )}
              <h3 className="text-xl sm:text-3xl mb-1.5 sm:mb-2 text-[#F5F0E8] font-playfair tracking-[-0.01em]">{plan.title}</h3>
              {plan.subline && (
                <p className="font-playfair italic text-[#F5F0E8] text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4 opacity-90">
                  {plan.subline}
                </p>
              )}
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-4xl font-playfair text-[#F5F0E8] tracking-[-0.01em]">{plan.price}</span>
                <span className="text-[10px] sm:text-sm opacity-70 text-[#F5F0E8] font-inter font-light tracking-[0.01em]">{plan.subtitle}</span>
              </div>
              <p className="mb-6 sm:mb-8 opacity-90 leading-[1.7] font-inter font-light text-[#F5F0E8] text-sm sm:text-base tracking-[0.01em]">
                {plan.description}
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-3 items-start text-[#F5F0E8]">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0 text-[#F5F0E8]" />
                    <span className="font-inter font-light text-sm sm:text-base tracking-[0.01em] text-[#F5F0E8]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <AnimatePresence mode="wait">
                  {(!plan.isComingSoon || !showMasteryForm) ? (
                    <motion.div
                      key="cta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <MagneticButton strength={0.2}>
                        {plan.link ? (
                          <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full border-2 border-white text-white py-4 rounded-[4px] uppercase font-archivo font-black tracking-[-0.03em] transition-colors hover:bg-white hover:text-brand-red text-sm sm:text-base"
                            >
                              {plan.cta}
                            </motion.button>
                          </a>
                        ) : (
                          <motion.button 
                            onClick={() => plan.isComingSoon && setShowMasteryForm(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full border-2 border-white text-white py-4 rounded-[4px] uppercase font-archivo font-black tracking-[-0.03em] transition-colors hover:bg-white hover:text-brand-red text-sm sm:text-base"
                          >
                            {plan.cta}
                          </motion.button>
                        )}
                      </MagneticButton>
                    </motion.div>
                  ) : !masterySubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleMasterySubmit}
                      className="space-y-6 w-full"
                    >
                      <div className="space-y-4">
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={masteryName}
                          onChange={(e) => setMasteryName(e.target.value)}
                          className="w-full bg-transparent border-b border-white py-3 focus:outline-none placeholder:text-white/60 text-sm font-archivo font-black tracking-[-0.03em] text-white transition-all focus:border-b-2"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          value={masteryEmail}
                          onChange={(e) => setMasteryEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-white py-3 focus:outline-none placeholder:text-white/60 text-sm font-archivo font-black tracking-[-0.03em] text-white transition-all focus:border-b-2"
                        />
                        <input
                          type="tel"
                          placeholder="Your phone number"
                          value={masteryPhone}
                          onChange={(e) => setMasteryPhone(e.target.value)}
                          className="w-full bg-transparent border-b border-white py-3 focus:outline-none placeholder:text-white/60 text-sm font-archivo font-black tracking-[-0.03em] text-white transition-all focus:border-b-2"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={masteryLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white text-brand-red py-4 rounded-[4px] font-archivo font-black uppercase tracking-[-0.03em] text-sm md:text-base shadow-lg shadow-white/20 transition-all disabled:opacity-50"
                      >
                        {masteryLoading ? "SENDING..." : "JOIN THE WAITLIST"}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-4"
                    >
                      <p className="font-playfair italic text-white text-center text-lg leading-relaxed">
                        You're on the list! 🎉 We'll notify you when Mastery launches.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicators (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {plans.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "bg-white w-4" : "bg-white/20 w-1.5"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
