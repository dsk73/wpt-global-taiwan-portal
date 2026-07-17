import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";

export async function getPaymentMethods(locale: string) {
  const response = await get<ApiResponse<any>>(
    `/payment-methods?locale=${locale}&populate=*`
  );

  return response.data;
}