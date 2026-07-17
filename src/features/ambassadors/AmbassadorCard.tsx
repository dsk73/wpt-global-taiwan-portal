'use client';

import Image from 'next/image';
import { Ambassador } from '@/types/ambassador';

interface Props {
  ambassador: Ambassador;
}

export default function AmbassadorCard({ ambassador }: Props) {
  const image = ambassador.CoverImage?.url ?? ambassador.Photo?.[0]?.url;

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        {image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
            alt={ambassador.Name}
            fill
            sizes="400px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{ambassador.Name}</h3>

        <p className="mt-1 text-blue-400">{ambassador.Position}</p>

        <p className="mt-1 text-sm text-gray-400">{ambassador.Country}</p>
      </div>
    </div>
  );
}
