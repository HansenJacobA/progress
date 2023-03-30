import withPlugins from "next-compose-plugins";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    return config;
  },
};

export default withPlugins([
  withBundleAnalyzer(nextConfig)({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: false,
  }),
]);
