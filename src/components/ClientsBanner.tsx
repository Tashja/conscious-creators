import { motion } from "motion/react";

const quotes = Array(6).fill("ALIGN WITH A HIGHER TIMELINE");

export default function ClientsBanner() {
  return (
    <section className="py-4 bg-brand-red border-y border-[#F5F0E8]/20 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* First set of quotes */}
          <div className="flex items-center gap-8 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-12">
            {quotes.map((quote, index) => (
              <span 
                key={index} 
                className="text-xs sm:text-base md:text-lg lg:text-xl font-archivo font-black text-[#F5F0E8] uppercase tracking-[-0.03em]"
              >
                {quote}
              </span>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-12">
            {quotes.map((quote, index) => (
              <span 
                key={`dup-${index}`} 
                className="text-xs sm:text-base md:text-lg lg:text-xl font-archivo font-black text-[#F5F0E8] uppercase tracking-[-0.03em]"
              >
                {quote}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
