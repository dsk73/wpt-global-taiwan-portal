import { getHeroSlides } from '@/services/hero.service';
import HeroCarousel from './HeroCarousel';

type Props = {
  locale: string;
};

export default async function Hero({ locale }: Props) {
  const slides = await getHeroSlides(locale);

  return <HeroCarousel slides={slides} />;
}
