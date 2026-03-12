/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Disable Turbopack entirely
  turbopack: null,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "pino-pretty": false,
      lokijs: false,
      encoding: false,
    };
    
    // Add a rule to ignore problematic test files
    config.module.rules.push({
      test: /node_modules\/thread-stream\/test/,
      use: 'null-loader',
    });
    
    config.ignoreWarnings = [
      { module: /node_modules\/pino/ },
      { module: /node_modules\/thread-stream/ },
    ];
    return config;
  },
}

export default nextConfig
