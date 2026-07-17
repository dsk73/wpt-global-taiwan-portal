import { getHeroSlides } from '@/services/hero.service';
import HeroCarousel from './HeroCarousel';

type Props = {
  locale: string;
};

export default async function Hero({ locale }: Props) {
  const slides = await getHeroSlides(locale);

  if (!slides.length) {
    return null;
  }

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[700px] w-full overflow-hidden">
      <HeroCarousel slides={slides} />
    </section>
  );
}
