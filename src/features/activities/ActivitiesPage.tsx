import { getActivities } from '@/services/activities.service';

import ActivitiesGrid from './ActivitiesGrid';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';

type Props = {
  locale: string;
};

export default async function ActivitiesPage({ locale }: Props) {
  const activities = await getActivities(locale);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}

      <section className="border-b border-white/10 bg-gradient-to-b from-[#111827] to-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm tracking-[0.35em] text-blue-400 uppercase">
            WPT GLOBAL TAIWAN
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            {locale === 'zh-Hant-TW' ? '最新活動' : 'Latest Activities'}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {locale === 'zh-Hant-TW'
              ? '探索最新的 WPT Global Taiwan 賽事、活動、推廣與官方消息。'
              : 'Discover the latest WPT Global tournaments, promotions, poker events and official news.'}
          </p>
        </div>
      </section>

      {/* Search + Filter */}

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <SearchBar />

          <CategoryFilter />
        </div>
      </section>

      {/* Activities */}

      <section className="mx-auto max-w-7xl px-6 py-14">
        <ActivitiesGrid activities={activities} locale={locale} />

        <div className="mt-16 flex justify-center">
          <Pagination currentPage={1} totalPages={1} />
        </div>
      </section>
    </div>
  );
}
