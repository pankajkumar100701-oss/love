import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow a higher quality for the hero photography.
    qualities: [75, 90],
  },
};

export default nextConfig;
