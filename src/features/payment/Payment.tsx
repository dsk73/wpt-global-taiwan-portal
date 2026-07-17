import { getPaymentMethods } from '@/services/payment.service';
import PaymentCard from './PaymentCard';

type Props = {
  locale: string;
};

export default async function Payment({ locale }: Props) {
  const payments = await getPaymentMethods(locale);

  if (!payments?.length) return null;

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-white">Payment Methods</h2>

          <p className="mt-4 max-w-3xl text-white/60">
            Deposit and withdraw safely using trusted payment options supported
            by WPT Global.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {payments.map((payment: any) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      </div>
    </section>
  );
}
