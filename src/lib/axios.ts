import axios from "axios";
import { siteConfig } from "@/config/site";

const axiosClient = axios.create({
  baseURL: `${siteConfig.strapiURL}${siteConfig.apiPrefix}`,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = process.env.STRAPI_API_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    return Promise.reject(error);
  }
);

export default axiosClient;