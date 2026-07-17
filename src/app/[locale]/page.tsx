import Hero from '@/features/hero/Hero';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return <Hero locale={locale} />;
}
