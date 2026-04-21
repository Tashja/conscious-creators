import { motion } from "motion/react";
import { useState, useRef } from "react";
import { cn } from "../lib/utils";

const testimonials = [
  {
    name: "Mare",
    image: "https://i.postimg.cc/8cyHnkpr/SCR_20260410_skbu.jpg",
    quote: "I FELT FINALLY THE PERMISSION TO FULLY CHOOSE ME. TO ACTUALLY CHOOSE THE LIFE I DEEPLY WANTED. WITH THE COACHING I HAD SOME MINDSETSHIFTS WHAT MADE ME MORE SECURE IN MYSELF AND MADE ME MORE LISTEN TO MY INTUITION"
  },
  {
    name: "Sherine",
    image: "https://i.postimg.cc/VL640tgX/SCR-20260410-sjmp.jpg",
    quote: "SHE HAS GIVEN ME THE COURAGE TO STEP OUT OF MY COMFORTZONE TO FULLY STEP INTO ALIGNMENT. SHE ALSO HELPS ME NOTICE WHEN MY EGO IS SPEAKING AND ENCOURAGES ME TO MOVE FORWARD WITH CLARITY AND CONFIDENCE"
  },
  {
    name: "Thanh Mai",
    image: "https://i.postimg.cc/BvtJdjQq/SCR-20260410-qwbf.png",
    quote: "A LOT HAS CHANGED FOR ME IN TWO MONTHS! NOT ONLY THE SUCCES I GAINED FROM THE COACHING FOR THE GOALS I HAD, BUT ALSO MENTALLY. NATASHJA SHOWED ME AND MADE ME REALIZE THAT EVERYTHING IS POSSIBLE AND THAT WHAT I WANT TO ACHIEVE IN LIFE IS SHAPED BY MY OWN MINDSET"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    
    // Calculate index based on scroll position
    const totalPossibleScroll = scrollWidth - offsetWidth;
    if (totalPossibleScroll <= 0) return;
    
    const index = Math.round((scrollLeft / totalPossibleScroll) * (testimonials.length - 1));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-brand-beige overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl mb-10 sm:mb-16 text-center text-brand-red font-playfair tracking-[-0.01em]"
        >
          Client Love <span className="text-sm align-middle ml-1">♥</span>
        </motion.h2>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide"
        >
          {testimonials.map((t, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2 
              }}
              className="group flex flex-col bg-brand-beige rounded-2xl overflow-hidden border border-brand-red/20 shadow-xl shadow-brand-red/5 min-h-[240px] sm:min-h-[280px] p-6 sm:p-8 snap-center shrink-0 w-[85vw] md:w-auto"
            >
              {/* Circular Avatar */}
              <img 
                src={t.image} 
                alt={t.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-brand-red/20 shadow-md mx-auto mb-4 sm:mb-6"
                referrerPolicy="no-referrer"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow items-center text-center">
                <p className="text-base sm:text-lg font-playfair mb-6 sm:mb-8 leading-relaxed text-brand-red opacity-90">
                  “{t.quote.toLowerCase()}”
                </p>
                <div className="mt-auto font-archivo font-black uppercase tracking-[-0.03em] text-[10px] sm:text-sm text-brand-red">
                  — {t.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicators (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "bg-brand-red w-4" : "bg-brand-red/20 w-1.5"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
