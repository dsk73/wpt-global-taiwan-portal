import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

import { Activity } from '@/types/activity';

type Props = {
  activity: Activity;
  locale: string;
};

export default function ActivityCard({ activity, locale }: Props) {
  const image =
    activity.Thumbnail?.[0]?.url || '/images/placeholders/activity.jpg';

  const title =
    locale === 'zh-Hant-TW'
      ? activity.Title
      : activity.localizations?.[0]?.Title || activity.Title;

  const summary =
    locale === 'zh-Hant-TW'
      ? activity.Summary
      : activity.localizations?.[0]?.Summary || activity.Summary;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,.35)]">
      {/* Image */}

      <Link href={`/${locale}/activities/${activity.Slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            alt={title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            unoptimized
          />

          {activity.Featured && (
            <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              {locale === 'zh-Hant-TW' ? '精選' : 'Featured'}
            </div>
          )}
        </div>
      </Link>

      {/* Content */}

      <div className="space-y-5 p-6">
        {/* Meta */}

        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />

            <span>
              {activity.PublishDate
                ? new Date(activity.PublishDate).toLocaleDateString()
                : '-'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />

            <span>
              {activity.ReadingTime || 5}{' '}
              {locale === 'zh-Hant-TW' ? '分鐘' : 'min'}
            </span>
          </div>
        </div>

        {/* Title */}

        <Link href={`/${locale}/activities/${activity.Slug}`}>
          <h2 className="line-clamp-2 text-2xl font-bold text-white transition group-hover:text-blue-400">
            {title}
          </h2>
        </Link>

        {/* Summary */}

        <p className="line-clamp-3 leading-7 text-zinc-400">{summary}</p>

        {/* Button */}

        <Link
          href={`/${locale}/activities/${activity.Slug}`}
          className="inline-flex items-center gap-2 font-semibold text-blue-500 transition hover:gap-3"
        >
          {locale === 'zh-Hant-TW' ? '閱讀更多' : 'Read More'}

          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
