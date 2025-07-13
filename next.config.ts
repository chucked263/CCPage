import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <--- This is the key line for static export
  // Optional: Add a trailing slash to URLs, good for static sites
  // trailingSlash: true, 

  // Optional: If you're using basePath for sub-path deployments
  // basePath: '/your-sub-path', 

  // If you're using the Next.js Image component, you might need to
  // disable optimization for static export or configure a custom loader.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
