'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSlide from './HeroSlide';

interface HeroCarouselProps {
  slides: unknown[];
}

export default function HeroCarousel({ slides = [] }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            No Hero Slides Found
          </h2>

          <p className="mt-3 text-zinc-400">
            Please add Hero Slides from Strapi.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-0"
        >
          <HeroSlide slide={slides[activeIndex]} active />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? 'h-2 w-10 rounded-full bg-blue-500'
                  : 'h-2 w-2 rounded-full bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
