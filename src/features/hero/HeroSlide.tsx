'use client';

import Image from 'next/image';

type Props = {
  slide: any;
  active?: boolean;
};

export default function HeroSlide({ slide }: Props) {
  const banner = slide?.Banner?.[0];

  const imageUrl = banner?.DesktopImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${banner.DesktopImage.url}`
    : null;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-16 md:flex-row md:px-12 lg:px-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex w-full flex-1 flex-col justify-center text-center md:text-left">
          {slide?.BadgeText && (
            <span className="mb-5 inline-flex w-fit self-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 md:self-start">
              {slide.BadgeText}
            </span>
          )}

          <h1 className="text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
            {slide?.Title}
          </h1>

          {slide?.Subtitle && (
            <h2 className="mt-5 text-xl font-medium text-white/90 md:text-3xl">
              {slide.Subtitle}
            </h2>
          )}

          {slide?.Description && (
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
              {slide.Description}
            </p>
          )}

          {(slide?.PrimaryButton?.length || slide?.SecondaryButton?.length) && (
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
              {slide?.PrimaryButton?.map((btn: any) => (
                <a
                  key={btn.id}
                  href={btn.URL}
                  className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  {btn.LabelTW || btn.LabelEN || btn.Label}
                </a>
              ))}

              {slide?.SecondaryButton?.map((btn: any) => (
                <a
                  key={btn.id}
                  href={btn.URL}
                  className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  {btn.LabelTW || btn.LabelEN || btn.Label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex w-full flex-1 items-center justify-center">
          {imageUrl ? (
            <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-3xl">
              <Image
                src={imageUrl}
                alt={banner?.AltTW || banner?.AltEN || slide?.Title}
                fill
                priority
                sizes="(max-width:768px) 100vw,50vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-square w-full max-w-xl items-center justify-center rounded-3xl border border-white/10 bg-zinc-900 text-zinc-500">
              Hero Image
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
