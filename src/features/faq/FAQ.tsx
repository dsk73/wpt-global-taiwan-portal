import { getFAQs } from '@/services/faq.service';
import FAQItem from './FAQItem';

type Props = {
  locale: string;
};

export default async function FAQ({ locale }: Props) {
  const faqs = await getFAQs(locale);

  if (!faqs.length) return null;

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-neutral-400">
            Everything you need to know about WPT Global.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
