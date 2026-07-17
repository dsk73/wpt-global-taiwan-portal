'use client';

import Image from 'next/image';

type Props = {
  slide: any;
  active?: boolean;
};

export default function HeroSlide({ slide }: Props) {
  const image = slide?.Banner?.[0]?.DesktopImage?.url;

  const imageUrl = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
    : null;

  return (
    <div className="relative h-full w-full">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={slide?.Banner?.[0]?.AltTW || 'WPT Global Banner'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl px-6 md:px-16">
          {slide?.BadgeText && (
            <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white">
              {slide.BadgeText}
            </span>
          )}

          <h1 className="text-5xl leading-tight font-bold text-white md:text-7xl">
            {slide?.Title}
          </h1>

          <h2 className="mt-5 text-xl text-white/90 md:text-3xl">
            {slide?.Subtitle}
          </h2>

          <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
            {slide?.Description}
          </p>

          <div className="mt-8 flex gap-4">
            {slide?.PrimaryButton?.map((btn: any) => (
              <a
                key={btn.id}
                href={btn.URL}
                className="rounded-full bg-white px-8 py-4 font-semibold text-black"
              >
                {btn.LabelTW}
              </a>
            ))}

            {slide?.SecondaryButton?.map((btn: any) => (
              <a
                key={btn.id}
                href={btn.URL}
                className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white"
              >
                {btn.LabelTW}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
