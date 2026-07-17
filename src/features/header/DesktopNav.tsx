'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION, HEADER_ACTIONS } from '@/constants/navigation';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  locale: 'zh-Hant-TW' | 'en';
};

export default function DesktopNav({ locale }: Props) {
  const pathname = usePathname();

  const isTW = locale === 'zh-Hant-TW';

  return (
    <div className="hidden w-full items-center lg:grid lg:grid-cols-[220px_1fr_320px]">
      {/* ---------------- Logo ---------------- */}

      <div className="flex items-center">
        <Link href={`/${locale}`}>
          <Image
            src="/logos/wpt-logo.png"
            alt="WPT Global"
            width={170}
            height={52}
            priority
            className="h-12 w-auto object-contain transition duration-300 hover:opacity-90"
          />
        </Link>
      </div>

      {/* ---------------- Center Menu ---------------- */}

      <nav className="flex items-center justify-center gap-11">
        {NAVIGATION.map((item) => {
          const href = `/${locale}${item.href}`;

          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={item.id}
              href={href}
              className="group relative py-7 text-[15px] font-medium tracking-wide transition"
            >
              <span
                className={`transition ${
                  active
                    ? 'text-blue-400'
                    : 'text-white group-hover:text-blue-400'
                }`}
              >
                {isTW ? item.labelTW : item.labelEN}
              </span>

              <span
                className={`absolute bottom-4 left-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* ---------------- Right Side ---------------- */}

      <div className="flex items-center justify-end gap-3">
        {/* Register */}

        <Link
          href={`/${locale}${HEADER_ACTIONS[0].href}`}
          className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white px-5 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          {isTW ? '註冊' : 'Register'}
        </Link>

        {/* Download */}

        <Link
          href={`/${locale}${HEADER_ACTIONS[1].href}`}
          className="flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {isTW ? '下載' : 'Download'}
        </Link>

        {/* Language */}

        <LanguageSwitcher locale={locale} />
      </div>
    </div>
  );
}
