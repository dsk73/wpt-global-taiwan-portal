import axios from "axios";
import { siteConfig } from "@/config/site";

const baseURL = `${siteConfig.strapiURL}${siteConfig.apiPrefix}`;

// Debug logs (Temporary)
console.log("====================================");
console.log("Environment Variables");
console.log("------------------------------------");
console.log("NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
console.log("NEXT_PUBLIC_STRAPI_URL:", process.env.NEXT_PUBLIC_STRAPI_URL);
console.log(
  "NEXT_PUBLIC_STRAPI_API_PREFIX:",
  process.env.NEXT_PUBLIC_STRAPI_API_PREFIX
);
console.log("STRAPI_API_TOKEN:", process.env.STRAPI_API_TOKEN ? "Present" : "Not Present");
console.log("------------------------------------");
console.log("Computed Base URL:", baseURL);
console.log("====================================");

const axiosClient = axios.create({
  baseURL,
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
    console.error("====================================");
    console.error("API Error");
    console.error("------------------------------------");
    console.error("Base URL:", baseURL);
    console.error("Message:", error.message);

    if (error.config) {
      console.error("Request URL:", error.config.url);
      console.error("Method:", error.config.method);
    }

    console.error(error);
    console.error("====================================");

    return Promise.reject(error);
  }
);

export default axiosClient;