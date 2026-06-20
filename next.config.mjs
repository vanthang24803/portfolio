import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.DOCKER_BUILD === "1" && { output: "standalone" }),
  reactStrictMode: true,
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        message: /Build dependencies behind this expression are ignored/,
      },
    ];
    return config;
  },
};

export default withNextIntl(nextConfig);
