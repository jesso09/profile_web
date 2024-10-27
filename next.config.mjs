/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['encrypted-tbn0.gstatic.com'],
      // Alternatively, you can use remotePatterns for more specific control
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'encrypted-tbn0.gstatic.com',
      //     pathname: '/**',
      //   },
      // ],
    },
  };

export default nextConfig;
