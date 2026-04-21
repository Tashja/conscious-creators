import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Freebie() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', name, email);
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name, email })
      });

      console.log('API response:', response.status);

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to subscribe:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-brand-beige overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        {/* Right Column (DOM order) but becomes Left on Desktop: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:w-1/2"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 rounded-xl overflow-hidden shadow-2xl w-full max-w-xs mx-auto md:max-w-none"
          >
            <img
              src="https://i.postimg.cc/FH16Y56P/conscious-creation-through-the-12-laws-of-the-universe-a-practical-guide-(1).jpg"
              alt="Conscious creation through the 12 laws of the universe"
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-brand-red/5 rounded-[2.5rem] -z-10 blur-2xl" />
        </motion.div>

        {/* Left Column (DOM order) but becomes Right on Desktop: Text & Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:w-1/2 text-center md:text-left"
        >
          <span className="font-archivo font-black text-[#84000d] uppercase tracking-[-0.03em] text-[10px] sm:text-xs mb-3 sm:mb-4">
            A PRACTICAL GUIDE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-[#84000d] mb-4 sm:mb-6 leading-tight tracking-[-0.01em]">
            Conscious creation through the 12 laws of the universe
          </h2>
          <p className="font-inter font-light text-[#84000d] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-[1.6] sm:leading-[1.7] tracking-[0.01em]">
            Close the gap between your desires and actually seeing results.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="NAME"
                      className="w-full bg-transparent border-b border-[#84000d] py-3 focus:outline-none placeholder:text-[#84000d]/40 uppercase text-sm font-archivo font-black tracking-[-0.03em] text-[#84000d] transition-all focus:border-b-2"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b border-[#84000d] py-3 focus:outline-none placeholder:text-[#84000d]/40 uppercase text-sm font-archivo font-black tracking-[-0.03em] text-[#84000d] transition-all focus:border-b-2"
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full bg-[#84000d] text-white py-5 rounded-[4px] font-archivo font-black uppercase tracking-[-0.03em] text-sm md:text-base shadow-xl shadow-brand-red/20 transition-all hover:shadow-brand-red/40 disabled:opacity-50"
                >
                  {loading ? "SENDING..." : "SEND ME THE FREE GUIDE"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <p className="font-playfair italic text-brand-red text-center text-xl">
                  Your guide is on its way! Check your inbox. ✨
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
