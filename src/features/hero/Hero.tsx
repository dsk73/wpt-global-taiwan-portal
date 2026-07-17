import { getHeroSlides } from '@/services/hero.service';
import HeroCarousel from './HeroCarousel';

interface HeroProps {
  locale: string;
}

export default async function Hero({ locale }: HeroProps) {
  const slides = await getHeroSlides(locale);

  return <HeroCarousel slides={Array.isArray(slides) ? slides : []} />;
}