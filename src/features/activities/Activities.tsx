import { getActivities } from '@/services/activities.service';
import ActivityCard from './ActivityCard';

type Props = {
  locale: string;
};

export default async function Activities({ locale }: Props) {
  const activities = await getActivities(locale);

  if (!activities.length) {
    return null;
  }

  return (
    <section className="bg-[#070707] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-white">最新活動</h2>

          <p className="mt-4 text-white/60">
            Explore the latest WPT Global tournaments, promotions and updates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
