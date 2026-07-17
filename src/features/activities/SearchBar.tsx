'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <div className="w-full lg:max-w-md">
      <div className="relative">
        <Search
          size={20}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search activities..."
          className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0B0B] pr-4 pl-12 text-white transition outline-none placeholder:text-zinc-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
    </div>
  );
}
