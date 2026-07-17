import Hero from '@/features/hero/Hero';
import Ambassadors from '@/features/ambassadors/Ambassadors';
import Payment from '@/features/payment/Payment';
import Activities from '@/features/activities/Activities';
import FAQ from '@/features/faq/FAQ';
import Footer from "@/features/footer/Footer";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />

      <Ambassadors locale={locale} />

      <Payment locale={locale} />

      <Activities locale={locale} />

      <FAQ locale={locale} />

      <Footer locale={locale} />
    </>
  );
}
