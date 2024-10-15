/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
  assetPrefix: isGithubPages ? '/phoenix-energy-website-2/' : '',  // GitHub Pages vs. local/other deployment
  basePath: isGithubPages ? '/phoenix-energy-website-2' : '',  // Conditionally set basePath
};

export default nextConfig;
