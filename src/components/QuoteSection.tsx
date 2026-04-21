import { motion } from "motion/react";

export default function QuoteSection() {
  return (
    <section className="bg-brand-beige py-16 md:py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Quote Content */}
        <div className="flex flex-col items-start text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-red/80 leading-[1.3] tracking-[-0.01em]"
          >
            "Your greatest awakening comes, when you are <span className="italic">aware</span> about your <span className="italic">infinite nature</span>."
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8"
          >
            <span className="font-inter text-[10px] tracking-[0.2em] text-brand-red/40 uppercase">
              — AMIT RAY
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
