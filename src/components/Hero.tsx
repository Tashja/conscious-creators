import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-12 sm:pb-20 md:pb-32 overflow-hidden bg-brand-beige">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
        >
          <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663098129466/dnXRGcNkOreChDMz.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] sm:leading-[1.3] mb-4 sm:mb-6 text-brand-red font-playfair tracking-[-0.01em] text-balance"
          >
            Yes, your life is meant to feel like a homecoming to your highest & most authentic self
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl font-inter font-light mb-6 sm:mb-8 text-brand-red tracking-[0.01em] leading-[1.6] sm:leading-[1.7] text-balance"
          >
            And it’s time you start consciously creating it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          <a href="https://calendly.com/natashjadenteuling/30-minute-intake-call-alignment-coaching" target="_blank" rel="noopener noreferrer">
            <MagneticButton strength={0.4}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-8 sm:px-10 py-4 sm:py-5 rounded-[4px] uppercase text-sm sm:text-base font-archivo font-black tracking-[-0.03em] shadow-xl shadow-brand-red/20"
              >
                WORK WITH TASHJA
              </motion.button>
            </MagneticButton>
          </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
