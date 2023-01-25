/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'musebecodes.dev',
      'thrangra.sirv.com',
      'icons8.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig
