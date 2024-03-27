/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https', // Assuming the image URL uses HTTPS (adjust if necessary)
        hostname: 'fakestoreapi.com', // Replace with the actual image host
      },
    ],
  },};

export default nextConfig;
