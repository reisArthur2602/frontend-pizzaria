/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[

      {
        // protocol:'https',
        hostname:'res.cloudinary.com'
      }
    ],
    domains: ["localhost"],
  },
};

export default nextConfig;
