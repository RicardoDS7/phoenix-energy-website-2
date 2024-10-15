/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

console.log('Is GitHub Pages?', isGithubPages);  // Debugging

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
  assetPrefix: isGithubPages ? '/phoenix-energy-website-2/' : '',  // GitHub Pages vs. local/other deployment
  basePath: isGithubPages ? '/phoenix-energy-website-2' : '',  // Conditionally set basePath
  publicRuntimeConfig: {
    basePath: isGithubPages ? '/phoenix-energy-website-2' : '',
  },
};

export default nextConfig;
