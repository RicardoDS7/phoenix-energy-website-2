/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

console.log('Is GitHub Pages?', isGithubPages);  // Debugging

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
  assetPrefix: '',  // No subdirectory prefix for custom domain
  basePath: '',     // No basePath needed for root domain deployment

  env: {
    NEXT_PUBLIC_BASE_PATH: '',  // Keep it empty since we are not using a subdirectory
  },
};

export default nextConfig;
