import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";


export async function getAmbassadors(locale: string) {

  const response = await get<ApiResponse<any>>(
    `/brand-ambassadors?locale=${locale}&populate=*`
  );

  return response.data;
}