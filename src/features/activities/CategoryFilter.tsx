'use client';

import { useState } from 'react';

const categories = ['All', 'Tournament', 'Promotion', 'News', 'Education'];

export default function CategoryFilter() {
  const [selected, setSelected] = useState('All');

  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            selected === category
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-white/10 bg-[#0B0B0B] text-zinc-400 hover:border-blue-500 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
