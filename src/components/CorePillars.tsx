import { useState, useRef } from "react";
import { AnimatedFeatureCard } from "./ui/AnimatedFeatureCard";
import { cn } from "../lib/utils";

const pillars = [
  {
    index: "001",
    tag: "ALIGNMENT",
    title: "PURPOSE & CREATION",
    description: "You can feel you came here for a bigger reason. You want to serve by using your unique talents and abilities.",
  },
  {
    index: "002",
    tag: "CONNECTION",
    title: "RELATIONSHIPS & BELONGING",
    description: "You no longer want trauma bonds. You want conscious, secure connection. Relationships that feel like home.",
  },
  {
    index: "003",
    tag: "FREEDOM",
    title: "ABUNDANCE & POWER",
    description: "You are done with survival. You want to feel safe, sovereign and financially self-led. Breaking old limits.",
  },
];

export default function CorePillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    
    // Calculate index based on scroll position
    const totalPossibleScroll = scrollWidth - offsetWidth;
    if (totalPossibleScroll <= 0) return;
    
    const index = Math.round((scrollLeft / totalPossibleScroll) * (pillars.length - 1));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-playfair text-brand-red mb-4 tracking-[-0.01em]">
            Manifest your <br className="md:hidden" /> deepest desires
          </h2>
          <p className="font-inter font-light text-brand-red/70 uppercase tracking-[0.01em] text-[10px] sm:text-xs">
            The three pillars of conscious creation
          </p>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide"
        >
          {pillars.map((pillar) => (
            <AnimatedFeatureCard
              key={pillar.index}
              index={pillar.index}
              tag={pillar.tag}
              title={pillar.title}
              description={pillar.description}
              className="snap-center shrink-0 w-[85vw] md:w-auto"
            />
          ))}
        </div>

        {/* Mobile Swipe Indicators (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {pillars.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "bg-brand-red w-4" : "bg-brand-red/20 w-1.5"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
