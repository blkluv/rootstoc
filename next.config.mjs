/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      // Ignore test files from thread-stream
      'thread-stream/test': false,
    },
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "pino-pretty": false,
      lokijs: false,
      encoding: false,
    };
    config.ignoreWarnings = [
      { module: /node_modules\/pino/ },
      { module: /node_modules\/thread-stream/ },
    ];
    return config;
  },
}

export default nextConfig
