import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";

export async function getHeroSlides(
  locale: string = "zh-Hant-TW"
) {

  const query =
    new URLSearchParams({
      locale,

      "populate[Banner][populate]": "*",

      "populate[PrimaryButton]": "*",

      "populate[SecondaryButton]": "*",
    }).toString();


  const response = await get<ApiResponse<any>>(
    `/hero-slides?${query}`
  );


  return response.data ?? [];
}