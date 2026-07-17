import Link from 'next/link';
import Image from 'next/image';
import { getFooter } from '@/services/footer.service';

type Props = {
  locale: string;
};

export default async function Footer({ locale }: Props) {
  const footer = await getFooter(locale);

  if (!footer) return null;

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left */}

          <div>
            <Image
              src="/logos/wpt-logo.png"
              alt="WPT Global"
              width={180}
              height={60}
              className="mb-6"
            />

            <div
              className="leading-8 text-neutral-400"
              dangerouslySetInnerHTML={{
                __html: footer.Description.replace(/\n/g, '<br/>'),
              }}
            />
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {footer.QuickLinks?.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="block text-neutral-400 transition hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Follow Us</h3>

            <div className="flex flex-wrap gap-4">
              {footer.SocialLinks?.map((social) => (
                <Link
                  key={social.id}
                  href={social.URL}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-blue-600"
                >
                  {social.Icon?.url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${social.Icon.url}`}
                      alt={social.Platform}
                      width={22}
                      height={22}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-500">
          {footer.Copyright}
        </div>
      </div>
    </footer>
  );
}
