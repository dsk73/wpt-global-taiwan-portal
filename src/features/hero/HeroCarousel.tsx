'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSlide from './HeroSlide';

interface HeroCarouselProps {
  slides?: unknown[];
}

export default function HeroCarousel({ slides = [] }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) {
    return (
      <div className="flex h-180 items-center justify-center text-white">
        No Hero Slides Found
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <HeroSlide slide={slides[activeIndex]} active />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all ${
              activeIndex === index
                ? 'h-2 w-10 rounded-full bg-white'
                : 'h-2 w-3 rounded-full bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
