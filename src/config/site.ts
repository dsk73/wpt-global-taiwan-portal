// src/config/site.ts

export const siteConfig = {
  name: "WPT Global Taiwan",

  description:
    "Official WPT Global Taiwan Portal",

  url: process.env.NEXT_PUBLIC_APP_URL!,

  strapiURL: process.env.NEXT_PUBLIC_STRAPI_URL!,

  apiPrefix:
    process.env.NEXT_PUBLIC_STRAPI_API_PREFIX || "/api",

  defaultLocale:
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "zh-Hant-TW",

  fallbackLocale:
    process.env.NEXT_PUBLIC_FALLBACK_LOCALE || "en",

  locales: [
    {
      code: "zh-Hant-TW",
      label: "繁體中文",
    },
    {
      code: "en",
      label: "English",
    },
  ],
} as const;

export type Locale =
  (typeof siteConfig.locales)[number]["code"];