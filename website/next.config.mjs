import webpack from 'webpack';

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

  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(isGithubPages ? '/phoenix-energy-website-2' : ''),
      })
    );
    return config;
  },
};

export default nextConfig;
