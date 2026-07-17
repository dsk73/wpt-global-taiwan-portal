'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ } from '@/types/faq';

type Props = {
  faq: FAQ;
};

export default function FAQItem({ faq }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{faq.Question}</h3>

        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 leading-8 text-neutral-300"
              dangerouslySetInnerHTML={{
                __html: faq.Answer.replace(/\n/g, '<br/>'),
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
