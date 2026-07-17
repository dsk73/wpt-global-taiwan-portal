'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircleQuestion, BriefcaseBusiness } from 'lucide-react';

type Props = {
  locale: 'zh-Hant-TW' | 'en';
};

export default function TopBar({ locale }: Props) {
  const pathname = usePathname();

  const isTW = locale === 'zh-Hant-TW';

  const links = [
    {
      labelTW: '常見問題',
      labelEN: 'FAQ',
      href: '/faq',
      icon: MessageCircleQuestion,
    },
    {
      labelTW: '合作洽談',
      labelEN: 'Business',
      href: '/contact',
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div className="hidden h-10 w-full border-b border-white/10 bg-[#060606] lg:block">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        {/* LEFT */}

        <div className="flex items-center gap-8">
          {links.map((item) => {
            const Icon = item.icon;

            const href = `/${locale}${item.href}`;

            const active = pathname === href;

            return (
              <Link
                key={item.href}
                href={href}
                className={`group flex items-center gap-2 text-sm transition ${
                  active ? 'text-blue-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Icon
                  size={16}
                  className="transition group-hover:text-blue-400"
                />

                <span>{isTW ? item.labelTW : item.labelEN}</span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="text-lg">🇹🇼</span>

          <span>{isTW ? '台灣 / 繁體中文' : 'Taiwan / English'}</span>
        </div>
      </div>
    </div>
  );
}
