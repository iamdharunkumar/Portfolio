import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize video loading and caching
  async headers() {
    return [
      {
        source: '/v2.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ];
  },
  
  // Optimize images and static assets
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
