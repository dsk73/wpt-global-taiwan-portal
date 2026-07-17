import { get } from "@/lib/fetcher";
import { ApiResponse } from "@/types/api";
import { Activity } from "@/types/activity";

export async function getActivities(
  locale: string
): Promise<Activity[]> {
  const response = await get<ApiResponse<Activity[]>>(
    `/content-articles?locale=${locale}&populate=*`
  );

  return response.data ?? [];
}