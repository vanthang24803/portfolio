import { MetadataRoute } from "next";

const BASE_URL = "https://cv.thangnguyen.io.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": `${BASE_URL}/en`,
          "ja-JP": `${BASE_URL}/ja`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-US": `${BASE_URL}/en`,
          "ja-JP": `${BASE_URL}/ja`,
        },
      },
    },
  ];
}
