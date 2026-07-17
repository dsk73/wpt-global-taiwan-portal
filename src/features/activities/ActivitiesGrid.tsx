import ActivityCard from './ActivityCard';

import { Activity } from '@/types/activity';

type Props = {
  activities: Activity[];
  locale: string;
};

export default function ActivitiesGrid({ activities, locale }: Props) {
  if (!activities || activities.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#0b0b0b]">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white">
            {locale === 'zh-Hant-TW' ? '目前沒有活動' : 'No Activities Found'}
          </h3>

          <p className="mt-3 text-zinc-400">
            {locale === 'zh-Hant-TW'
              ? '請稍後再查看最新活動。'
              : 'Please check back later for new activities.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} locale={locale} />
      ))}
    </div>
  );
}
