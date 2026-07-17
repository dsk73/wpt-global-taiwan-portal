'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2">
      {/* Previous */}

      <button
        disabled={currentPage === 1}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0B0B0B] text-white transition hover:border-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}

      {pages.map((page) => (
        <button
          key={page}
          className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition ${
            page === currentPage
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-white/10 bg-[#0B0B0B] text-zinc-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0B0B0B] text-white transition hover:border-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
