import axios from "axios";
import { siteConfig } from "@/config/site";

const baseURL = `${siteConfig.strapiURL}${siteConfig.apiPrefix}`;

console.log("====================================");
console.log("Environment Variables");
console.log("------------------------------------");
console.log("NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
console.log("NEXT_PUBLIC_STRAPI_URL:", process.env.NEXT_PUBLIC_STRAPI_URL);
console.log(
  "NEXT_PUBLIC_STRAPI_API_PREFIX:",
  process.env.NEXT_PUBLIC_STRAPI_API_PREFIX
);
console.log(
  "STRAPI_API_TOKEN:",
  process.env.STRAPI_API_TOKEN ? "Present" : "Not Present"
);
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
    console.error("🚨 API ERROR");
    console.error("------------------------------------");

    console.error("Base URL:");
    console.error(baseURL);

    console.error("------------------------------------");

    console.error("Request URL:");
    console.error(error.config?.url);

    console.error("------------------------------------");

    console.error("Full URL:");
    console.error(`${baseURL}${error.config?.url}`);

    console.error("------------------------------------");

    console.error("Method:");
    console.error(error.config?.method);

    console.error("------------------------------------");

    console.error("Status:");
    console.error(error.response?.status);

    console.error("------------------------------------");

    console.error("Response Data:");
    console.error(error.response?.data);

    console.error("------------------------------------");

    console.error("Headers:");
    console.error(error.response?.headers);

    console.error("------------------------------------");

    console.error("Complete Error:");
    console.error(error);

    console.error("====================================");

    return Promise.reject(error);
  }
);

export default axiosClient;