//src/features/header/LanguageSwitcher.tsx

'use client';

import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

type Locale = 'zh-Hant-TW' | 'en';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = locale;

  const nextLocale = useMemo<Locale>(() => {
    return currentLocale === 'zh-Hant-TW' ? 'en' : 'zh-Hant-TW';
  }, [currentLocale]);

  const switchLanguage = () => {
    if (!pathname) return;

    const segments = pathname.split('/').filter(Boolean);

    if (
      segments.length > 0 &&
      (segments[0] === 'en' || segments[0] === 'zh-Hant-TW')
    ) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    router.push('/' + segments.join('/'));
  };

  return (
    <button
      onClick={switchLanguage}
      aria-label="Switch Language"
      className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800"
    >
      <Globe size={18} />

      <span>{currentLocale === 'zh-Hant-TW' ? '繁中' : 'EN'}</span>
    </button>
  );
}
