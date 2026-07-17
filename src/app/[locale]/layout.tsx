//src/app/%5Blocale%5D/layout.tsx

import Header from '@/features/header/Header';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const currentLocale = locale === 'en' ? 'en' : 'zh-Hant-TW';

  return (
    <>
      <Header locale={currentLocale} />

      <main className="min-h-screen pt-30">{children}</main>
    </>
  );
}
