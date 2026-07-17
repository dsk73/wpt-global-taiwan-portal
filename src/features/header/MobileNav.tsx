'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  MessageCircleQuestion,
  BriefcaseBusiness,
} from 'lucide-react';

import { NAVIGATION, HEADER_ACTIONS } from '@/constants/navigation';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  locale: 'zh-Hant-TW' | 'en';
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function MobileNav({ locale, open, onOpen, onClose }: Props) {
  const pathname = usePathname();

  const isTW = locale === 'zh-Hant-TW';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const utilityLinks = [
    {
      labelTW: '常見問題',
      labelEN: 'FAQ',
      href: '/faq',
      icon: MessageCircleQuestion,
    },
    {
      labelTW: '合作洽談',
      labelEN: 'Business Cooperation',
      href: '/contact',
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <>
      {/* Mobile Header */}

      <div className="flex h-20 w-full items-center justify-between lg:hidden">
        <Link href={`/${locale}`}>
          <Image
            src="/logos/wpt-logo.png"
            alt="WPT Global"
            width={155}
            height={46}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onOpen}
          className="rounded-lg border border-white/10 bg-[#111] p-2.5 text-white transition hover:border-blue-500"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-[320px] flex-col bg-[#090909] shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Image
            src="/logos/wpt-logo.png"
            alt="WPT Global"
            width={150}
            height={45}
            className="h-9 w-auto"
          />

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-white transition hover:border-red-500"
          >
            <X size={22} />
          </button>
        </div>

        {/* Utility Links */}

        <div className="border-b border-white/10 px-6 py-5">
          <div className="space-y-3">
            {utilityLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon size={18} />

                  {isTW ? item.labelTW : item.labelEN}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-2">
            {NAVIGATION.map((item) => {
              const href = `/${locale}${item.href}`;

              const active =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={onClose}
                  className={`block rounded-xl px-4 py-4 text-base font-medium transition ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {isTW ? item.labelTW : item.labelEN}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}

        <div className="border-t border-white/10 p-6">
          <div className="mb-5 flex justify-center">
            <LanguageSwitcher locale={locale} />
          </div>

          <div className="space-y-3">
            <Link
              href={`/${locale}${HEADER_ACTIONS[0].href}`}
              onClick={onClose}
              className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              {isTW ? '註冊' : 'Register'}
            </Link>

            <Link
              href={`/${locale}${HEADER_ACTIONS[1].href}`}
              onClick={onClose}
              className="flex h-11 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {isTW ? '下載' : 'Download'}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
