import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface AnimatedFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  index: string;
  tag: string;
  title: string;
  description: string;
}

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, index, tag, title, description, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative flex h-[350px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[#84000d]/10 bg-[#CCC9BF]/20 p-6 shadow-sm",
          className
        )}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { y: 0 },
          hover: { y: -10 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        {...props}
      >
        {/* Subtiele Gradient Background */}
        <div className="absolute inset-0 z-0 bg-radial-gradient from-[#84000d]/5 to-transparent opacity-50" />
        
        {/* Index Nummer - Luxurious / Sophisticated stijl */}
        <div className="absolute top-8 left-8 text-2xl md:text-3xl font-light tracking-tighter text-[#84000d]/20 italic" 
             style={{ fontFamily: "'Playfair Display', serif", fontVariantNumeric: "oldstyle-nums" }}>
          {index}
        </div>
        
        {/* Content Box - Zweeft nu centraal onderin zonder icoon-verstoring */}
        <div className="relative z-20 rounded-xl border border-[#84000d]/10 bg-white/80 p-5 backdrop-blur-md">
          <span className="mb-2 inline-block rounded-full bg-[#84000d] px-3 py-1 text-[10px] font-inter font-light tracking-[0.01em] text-white uppercase">
            {tag}
          </span>
          <h3 className="text-xl font-archivo font-black uppercase text-[#84000d] mb-2 leading-tight tracking-[-0.03em]">{title}</h3>
          <p className="text-sm text-[#84000d]/80 font-inter font-light leading-[1.7] tracking-[0.01em]">{description}</p>
        </div>
      </motion.div>
    );
  }
);

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";
export { AnimatedFeatureCard };
