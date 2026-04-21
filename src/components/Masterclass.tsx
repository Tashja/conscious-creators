import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Masterclass() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/masterclass-waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to join waitlist:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand-beige py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
        >
          <h2 className="font-archivo font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-red uppercase tracking-[-0.03em] mb-6 md:mb-8">
            FREE MASTERCLASS
          </h2>
          
          <div className="space-y-1 md:space-y-2 mb-8 md:mb-10">
            <h3 className="font-archivo font-black text-lg sm:text-xl md:text-2xl text-brand-red uppercase tracking-[-0.03em]">
              BREAK OLD LIMITS
            </h3>
            <p className="font-playfair italic text-brand-red text-base sm:text-lg md:text-xl">
              by Tashja
            </p>
          </div>

          <p className="font-inter font-light text-brand-red text-sm sm:text-base md:text-lg leading-[1.6] sm:leading-[1.7] tracking-[0.01em] mb-10 md:mb-12">
            In this masterclass you learn to detach from your ego, the past and non-serving stories. From there you learn to tap into becoming the creator from the I AM state, the state from which you can manifest anything and your creation powers are endless.
          </p>

          <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <MagneticButton strength={0.2}>
                    <motion.button
                      onClick={() => setShowForm(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-brand-red text-white px-12 py-5 rounded-[4px] font-archivo font-black uppercase tracking-[-0.03em] text-sm md:text-base shadow-xl shadow-brand-red/20 transition-all hover:shadow-brand-red/40"
                    >
                      SIGN UP
                    </motion.button>
                  </MagneticButton>
                </motion.div>
              ) : !submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 w-full"
                >
                  <div className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-red py-3 focus:outline-none placeholder:text-brand-red/40 uppercase text-sm font-archivo font-black tracking-[-0.03em] text-brand-red transition-all focus:border-b-2"
                    />
                    <input
                      type="email"
                      required
                      placeholder="EMAIL ADDRESS"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-red py-3 focus:outline-none placeholder:text-brand-red/40 uppercase text-sm font-archivo font-black tracking-[-0.03em] text-brand-red transition-all focus:border-b-2"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-red text-white py-4 rounded-[4px] font-archivo font-black uppercase tracking-[-0.03em] text-sm md:text-base shadow-lg shadow-brand-red/20 transition-all disabled:opacity-50"
                  >
                    {loading ? "SENDING..." : "JOIN THE WAITLIST"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <p className="font-playfair italic text-brand-red text-center text-xl">
                    You're on the list! ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
        >
          <img
            src="https://i.postimg.cc/XqPCxzf3/009C7834-E25A-4A6B-805A-25A6FB9CD97A-1-105-c.jpg"
            alt="Tashja"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
