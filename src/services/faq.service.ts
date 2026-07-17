import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";
import { FAQ } from "@/types/faq";

export async function getFAQs(locale: string) {
  const response = await get<ApiResponse<FAQ[]>>(
    `/faqs?locale=${locale}&sort=DisplayOrder:asc`
  );

  return response.data.filter((faq) => faq.Active);
}