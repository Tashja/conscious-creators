import { Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-24 px-6 md:px-12 lg:px-24 bg-brand-beige border-t border-brand-red/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl mb-4 sm:mb-6 text-brand-red font-playfair tracking-[-0.01em]"
          >
            Newsletter
          </motion.h2>
          <p className="text-sm sm:text-lg mb-6 sm:mb-10 font-inter font-light text-brand-red opacity-80 tracking-[0.01em] leading-[1.6] sm:leading-[1.7]">Sign up for coaching tips, events, and more.</p>
          
          <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="FIRST NAME" 
                className="bg-transparent border-b border-brand-red py-2.5 sm:py-3 focus:outline-none placeholder:text-brand-red/50 uppercase text-[10px] sm:text-sm font-archivo font-black tracking-[-0.03em] text-brand-red transition-all focus:border-b-2"
              />
              <input 
                type="text" 
                placeholder="LAST NAME" 
                className="bg-transparent border-b border-brand-red py-2.5 sm:py-3 focus:outline-none placeholder:text-brand-red/50 uppercase text-[10px] sm:text-sm font-archivo font-black tracking-[-0.03em] text-brand-red transition-all focus:border-b-2"
              />
            </div>
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-brand-red py-2.5 sm:py-3 focus:outline-none placeholder:text-brand-red/50 uppercase text-[10px] sm:text-sm font-archivo font-black tracking-[-0.03em] text-brand-red transition-all focus:border-b-2"
            />
            <MagneticButton strength={0.2}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 sm:mt-4 w-full sm:w-auto bg-brand-red text-white px-8 py-3.5 sm:py-4 rounded-[4px] uppercase text-[10px] sm:text-sm font-archivo font-black tracking-[-0.03em] shadow-lg shadow-brand-red/10"
              >
                SIGN UP
              </motion.button>
            </MagneticButton>
          </form>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="text-xl sm:text-3xl font-playfair mb-6 sm:mb-8 md:text-right text-brand-red leading-tight tracking-[-0.01em]">
            Conscious<br className="hidden md:block" /> Creators
          </div>
          
          <div className="flex gap-5 sm:gap-6 mb-6 sm:mb-12">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <motion.a 
                key={i}
                href="#" 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-brand-red p-1.5 sm:p-2"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
          
          <div className="text-[9px] sm:text-xs opacity-60 font-inter font-light uppercase tracking-[0.01em] text-brand-red">
            © {new Date().getFullYear()} Conscious Creators. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
