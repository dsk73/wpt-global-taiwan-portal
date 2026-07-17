'use client';

import Image from 'next/image';

type Props = {
  slide: any;
  active?: boolean;
};

export default function HeroSlide({ slide }: Props) {
  const banner = slide?.Banner?.[0];

  const desktopImage = banner?.DesktopImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${banner.DesktopImage.url}`
    : null;

  const mobileImage = banner?.MobileImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${banner.MobileImage.url}`
    : desktopImage;

  return (
    <>
      {/* ========================= DESKTOP & TABLET ========================= */}
      <section className="relative hidden h-[90vh] w-full overflow-hidden md:block">
        {/* Background */}
        {desktopImage ? (
          <Image
            src={desktopImage}
            alt={banner?.AltTW || slide?.Title || 'Hero'}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-8 lg:px-10">
            <div className="max-w-2xl">
              {slide?.BadgeText && (
                <span className="mb-6 inline-flex rounded-full border border-blue-500/40 bg-blue-600/20 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur">
                  {slide.BadgeText}
                </span>
              )}

              <h1 className="text-5xl leading-tight font-bold text-white lg:text-7xl">
                {slide?.Title}
              </h1>

              {slide?.Subtitle && (
                <h2 className="mt-6 text-2xl font-medium text-white/90 lg:text-3xl">
                  {slide.Subtitle}
                </h2>
              )}

              {slide?.Description && (
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
                  {slide.Description}
                </p>
              )}

              {(slide?.PrimaryButton?.length > 0 ||
                slide?.SecondaryButton?.length > 0) && (
                <div className="mt-10 flex flex-wrap gap-5">
                  {slide.PrimaryButton?.map((btn: any) => (
                    <a
                      key={btn.id}
                      href={btn.URL}
                      className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                    >
                      {btn.LabelTW || btn.LabelEN || btn.Label}
                    </a>
                  ))}

                  {slide.SecondaryButton?.map((btn: any) => (
                    <a
                      key={btn.id}
                      href={btn.URL}
                      className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
                    >
                      {btn.LabelTW || btn.LabelEN || btn.Label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= MOBILE ========================= */}
      <section className="flex min-h-screen flex-col bg-black md:hidden">
        {/* Mobile Image */}
        <div className="relative h-[45vh] w-full">
          {mobileImage ? (
            <Image
              src={mobileImage}
              alt={banner?.AltTW || slide?.Title || 'Hero'}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-zinc-900" />
          )}

          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Mobile Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-8">
          {slide?.BadgeText && (
            <span className="mb-5 inline-flex w-fit rounded-full border border-blue-500/40 bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-300">
              {slide.BadgeText}
            </span>
          )}

          <h1 className="text-4xl leading-tight font-bold text-white">
            {slide?.Title}
          </h1>

          {slide?.Subtitle && (
            <h2 className="mt-4 text-xl text-white/90">{slide.Subtitle}</h2>
          )}

          {slide?.Description && (
            <p className="mt-5 text-base leading-7 text-zinc-300">
              {slide.Description}
            </p>
          )}

          {(slide?.PrimaryButton?.length > 0 ||
            slide?.SecondaryButton?.length > 0) && (
            <div className="mt-8 flex flex-col gap-4">
              {slide.PrimaryButton?.map((btn: any) => (
                <a
                  key={btn.id}
                  href={btn.URL}
                  className="rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                >
                  {btn.LabelTW || btn.LabelEN || btn.Label}
                </a>
              ))}

              {slide.SecondaryButton?.map((btn: any) => (
                <a
                  key={btn.id}
                  href={btn.URL}
                  className="rounded-xl border border-white/30 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  {btn.LabelTW || btn.LabelEN || btn.Label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
