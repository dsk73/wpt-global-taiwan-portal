export function buildQuery(locale: string) {
  return new URLSearchParams({
    locale,

    "populate[Banner][populate]": "*",
    "populate[PrimaryButton]": "*",
    "populate[SecondaryButton]": "*",

  }).toString();
}