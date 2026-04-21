import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });

  // De parallax beweging
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    /* De 'mx-4' en 'rounded-[2rem]' zorgen voor de zwevende, ronde look van het origineel */
    <div className="mx-4 md:mx-10 mt-6 md:mt-10 mb-12 md:mb-20 overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-brand-beige shadow-sm">
      <div
        className="relative flex h-[65vh] md:h-[100vh] items-center justify-center overflow-hidden"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* Achtergrond */}
        <div className="absolute top-0 md:top-[-10vh] h-full md:h-[120vh] w-full z-0">
          <motion.div 
            className="relative h-full w-full" 
            style={typeof window !== 'undefined' && window.innerWidth >= 768 ? { y } : {}}
          >
            {/* Mobile Image (Portrait) */}
            <img
              alt="Sovereign Being - Mobile"
              src="https://i.postimg.cc/6pH6VySB/0965B2A3-7D6C-4DCA-BB99-1577A41E239E-1-105-c.jpg"
              className="block md:hidden w-full h-full object-cover object-[50%_35%]"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Image (Landscape) */}
            <img
              alt="Sovereign Being - Conscious Creators"
              src="https://i.postimg.cc/7Lgs6rDv/D13380F6-9C8E-489C-922B-2181F0D1C1B4-1-201-a.jpg"
              className="hidden md:block w-full h-full object-cover [object-position:50%_60%]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* De Tekst-laag: p-12 of p-20 zorgt voor de plaatsing in de hoeken */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-12 md:p-20 text-white md:absolute md:inset-0">
          {/* Subtle edge gradients for legibility */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60 md:from-black/20 md:to-black/40 z-[-1]" />
          
          {/* Subtekst nu BOVENIN, LINKS uitgelijnd */}
          <motion.p 
            className="w-full self-start text-left text-[11px] sm:text-sm md:text-base font-inter font-light tracking-[0.01em] leading-[1.6] sm:leading-[1.7] text-white md:drop-shadow-lg pt-4 md:pt-0"
          >
            Shift from who you've been conditioned to be,<br />
            into alignment with who you truly are
          </motion.p>

          {/* Hoofdtekst nu ONDERIN, RECHTS uitgelijnd */}
          <motion.h2 
            className="w-full self-end text-right text-[7vw] sm:text-[8vw] md:text-[5vw] font-archivo font-black uppercase leading-[0.9] max-w-4xl text-white md:drop-shadow-lg tracking-[-0.03em]"
          >
            Remember the <br /> sovereign being <br /> that you are
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
