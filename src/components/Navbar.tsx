import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        height: isScrolled ? "60px" : "80px",
        backgroundColor: isScrolled ? "rgba(204, 201, 191, 0.95)" : "transparent",
        borderColor: isScrolled ? "rgba(132, 0, 13, 0.1)" : "transparent",
      }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-300 border-b",
        isScrolled ? "backdrop-blur-md" : "backdrop-blur-none"
      )}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Links: Site Title */}
        <div className="text-base sm:text-lg md:text-xl font-playfair text-brand-red shrink-0 cursor-pointer tracking-[-0.01em]">
          Conscious Creators
        </div>

        {/* Rechts: Book Intake CTA */}
        <div className="flex items-center shrink-0">
          <a href="https://calendly.com/natashjadenteuling/30-minute-intake-call-alignment-coaching" target="_blank" rel="noopener noreferrer">
            <MagneticButton strength={0.2}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-red text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-[4px] uppercase text-[10px] sm:text-[11px] font-archivo font-black tracking-[-0.03em] shadow-lg shadow-brand-red/10 whitespace-nowrap"
              >
                BOOK FREE INTAKE
              </motion.button>
            </MagneticButton>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
