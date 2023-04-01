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
};

export default withPlugins([
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig),
]);
