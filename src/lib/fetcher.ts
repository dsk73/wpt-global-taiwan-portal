import axiosClient from "./axios";

export async function get<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T> {
  const response = await axiosClient.get<T>(url, {
    params,
  });

  return response.data;
}

export async function post<T>(
  url: string,
  body: unknown
): Promise<T> {
  const response = await axiosClient.post<T>(url, body);

  return response.data;
}

export async function put<T>(
  url: string,
  body: unknown
): Promise<T> {
  const response = await axiosClient.put<T>(url, body);

  return response.data;
}

export async function remove<T>(
  url: string
): Promise<T> {
  const response = await axiosClient.delete<T>(url);

  return response.data;
}