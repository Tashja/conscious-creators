import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200); // Visible for 1.2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#84000d] flex items-center justify-center p-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-archivo font-black text-4xl md:text-6xl text-[#F5F0E8] uppercase tracking-[-0.03em] text-center"
          >
            CONSCIOUS CREATORS
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
