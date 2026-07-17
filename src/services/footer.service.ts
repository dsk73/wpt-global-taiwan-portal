import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";
import { FooterData } from "@/types/footer";

export async function getFooter(locale: string) {
  const response = await get<ApiResponse<FooterData>>(
    `/footer?locale=${locale}&populate[SocialLinks][populate]=*`
  );

  return response.data;
}