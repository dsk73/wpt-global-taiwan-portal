'use client';

import { useEffect, useState } from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import TopBar from './TopBar';

type Props = {
  locale?: 'zh-Hant-TW' | 'en';
};

export default function Header({ locale = 'zh-Hant-TW' }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#090909] shadow-2xl'
          : 'bg-[#090909]'
      }`}
    >
      {/* TOP BAR */}

      <TopBar locale={locale} />

      {/* MAIN NAVBAR */}

      <div className="border-b border-white/5">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-5 lg:px-8">
          {/* Desktop */}

          <DesktopNav locale={locale} />

          {/* Mobile */}

          <MobileNav
            locale={locale}
            open={mobileOpen}
            onOpen={() => setMobileOpen(true)}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
