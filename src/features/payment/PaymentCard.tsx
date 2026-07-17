import Image from "next/image";
import { PaymentMethod } from "@/types/payment";

type Props = {
  payment: PaymentMethod;
};

export default function PaymentCard({ payment }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f1015] p-6 transition duration-300 hover:border-blue-500 hover:-translate-y-1">

      <div className="flex items-center gap-4">

        {payment.Logo?.url && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${payment.Logo.url}`}
            alt={payment.Name}
            width={60}
            height={60}
            className="rounded-lg object-contain"
            unoptimized
          />
        )}

        <div>
          <h3 className="text-lg font-semibold text-white">
            {payment.Name}
          </h3>

          <p className="text-sm text-white/60">
            {payment.ProcessingTime}
          </p>
        </div>

      </div>

      <p className="mt-6 text-sm leading-7 text-white/70">
        {payment.Description}
      </p>

      <div className="mt-6 space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-white/50">Minimum</span>

          <span className="text-white">
            ${payment.MinimumDeposit}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/50">Maximum</span>

          <span className="text-white">
            ${payment.MaximumDeposit}
          </span>
        </div>

      </div>

      {payment.SupportedCurrency?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">

          {payment.SupportedCurrency.map((currency) => (
            <span
              key={currency}
              className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-400"
            >
              {currency}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}