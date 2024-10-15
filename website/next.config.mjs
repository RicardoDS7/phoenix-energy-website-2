/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',       // Enables static export
    assetPrefix: './',      // Ensures relative paths for assets like CSS, JS
    basePath: '/phoenix-energy-website-2',
    images: {
        unoptimized: true,  // Disable Next.js Image Optimization just for GitHub
      },
};

export default nextConfig;
