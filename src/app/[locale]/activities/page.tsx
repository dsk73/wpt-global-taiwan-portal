import ActivitiesPage from '@/features/activities/ActivitiesPage';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata = {
  title: 'Activities | WPT Global Taiwan',
  description:
    'Latest WPT Global Taiwan tournaments, promotions, events and poker news.',
};

export default async function Activities({ params }: Props) {
  const { locale } = await params;

  return <ActivitiesPage locale={locale} />;
}
