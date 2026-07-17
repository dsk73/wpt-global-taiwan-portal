import { getHeroSlides } from '@/services/hero.service';
import HeroCarousel from './HeroCarousel';

type Props = {
  locale: string;
};

export default async function Hero({ locale }: Props) {
  try {
    const slides = await getHeroSlides(locale);

    return <HeroCarousel slides={Array.isArray(slides) ? slides : []} />;
  } catch (error) {
    console.error('Hero Error:', error);

    return (
      <section className="flex h-[90vh] items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Failed to load Hero</h2>

          <p className="mt-3 text-zinc-400">Check Strapi API connection.</p>
        </div>
      </section>
    );
  }
}
