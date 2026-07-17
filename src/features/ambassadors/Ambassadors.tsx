import { getAmbassadors } from '@/services/ambassadors.service';
import AmbassadorCard from './AmbassadorCard';

type Props = {
  locale: string;
};

export default async function Ambassadors({ locale }: Props) {
  const ambassadors = await getAmbassadors(locale);

  if (!ambassadors?.length) {
    return null;
  }

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">WPTGlobal Brand Ambassadors</h2>

          <p className="mt-4 text-white/60">
            They represent the spirit and professionalism of WPTGlobal, working
            together to create a better poker experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ambassadors.map((item: any) => (
            <AmbassadorCard key={item.id} ambassador={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
