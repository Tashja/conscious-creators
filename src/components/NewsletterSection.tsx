import { motion } from "motion/react";
import { Instagram, Youtube } from "lucide-react";
import { Warp } from "@paper-design/shaders-react";

export default function NewsletterSection() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-8">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <Warp 
          colors={["#84000d", "#5a0008", "#a01020", "#3d0005"]}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-brand-red/60 mb-4 block">
            WEEKLY ALIGNMENT NOTES
          </span>
          
          <h2 className="font-playfair italic text-5xl md:text-6xl text-brand-red mb-4">
            Stay in alignment.
          </h2>
          
          <p className="font-inter font-light text-brand-red/70 text-base mb-10 max-w-md mx-auto leading-relaxed">
            A weekly letter on conscious creation, inner work, and living from the inside out.
          </p>

          <div className="max-w-lg w-full mx-auto bg-[#F5F0E8] border border-brand-red/20 rounded-2xl p-2">
            <iframe 
              src="https://ttashja.substack.com/embed" 
              width="100%" 
              height="150" 
              style={{ border: 'none', background: 'transparent' }} 
              frameBorder="0" 
              scrolling="no"
            />
          </div>

          <div className="mt-6">
            <a 
              href="https://ttashja.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-inter text-xs text-brand-red/50 hover:text-brand-red/80 transition-colors"
            >
              or read on Substack → ttashja.substack.com
            </a>
          </div>

          <div className="mt-8 flex gap-6 justify-center">
            <a 
              href="https://www.instagram.com/natashja.denteuling/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red/50 hover:text-brand-red transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@tashja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red/50 hover:text-brand-red transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.17-1.35 1.97-.08.51-.01 1.04.18 1.53.44 1.22 1.56 2.1 2.85 2.12 1.02.02 2.04-.45 2.7-1.23.54-.61.82-1.43.81-2.24-.02-4.03-.01-8.05-.01-12.08z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@NatashjadenTeuling" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red/50 hover:text-brand-red transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
