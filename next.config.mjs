/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "fortee.jp",
            port: "",
            pathname: "/files/frontend-conf-hokkaido-2024/**/*.{jpg,png}",
          },
        ],
      }
};

export default nextConfig;
