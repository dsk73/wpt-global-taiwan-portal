const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";


export function getMediaUrl(
  url?: string
) {

  if (!url) {
    return "/images/placeholders/hero.png";
  }


  if(url.startsWith("http")){
    return url;
  }


  return `${STRAPI_URL}${url}`;
}