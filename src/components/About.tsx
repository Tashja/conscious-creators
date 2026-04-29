import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24 px-5 md:px-12 lg:px-24 bg-brand-beige overflow-hidden">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="block md:hidden font-archivo font-black text-[10px] tracking-[0.2em] text-brand-red/60 mb-2 uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-7xl text-brand-red font-playfair tracking-[-0.01em]">
            About Tashja
          </h2>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 md:mb-12 max-w-3xl mx-auto aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl shadow-brand-red/10 border border-brand-red/20"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/uGNLbNinTxM"
            title="About Tashja Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl font-playfair italic mb-8 border-l-4 border-brand-red pl-4 text-left md:text-center md:border-l-0 md:pl-0 text-brand-red"
        >
          Your reality is a materialisation of your inner world, shaped by your programming.
        </motion.p>
        
        <div className="space-y-3 md:space-y-4 w-full text-brand-red">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter font-light text-sm md:text-base leading-relaxed text-left max-w-2xl mx-auto"
          >
            Most people spend their lives recreating the same patterns and loops — unconsciously. In this video you'll learn how self awareness, the law of assumption and shifting your state of being can change everything. Because once you understand how reality is actually created, you can never unsee it.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-xs md:text-sm font-playfair italic text-brand-red/70 pt-2"
          >
            This is where the real inner work starts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-4 sm:pt-4 text-center"
          >
            <a href="https://calendly.com/natashjadenteuling/30-minute-intake-call-alignment-coaching" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-red text-white px-8 sm:px-10 py-4 rounded-[4px] uppercase font-archivo font-black tracking-[-0.03em] shadow-lg shadow-brand-red/10 text-sm sm:text-base"
              >
                WORK WITH TASHJA
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
