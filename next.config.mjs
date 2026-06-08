/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (repo is the user site -> served at root, no basePath).
  output: "export",
  // Next/Image optimization needs a server; static export must use unoptimized images.
  images: { unoptimized: true },
  // Emit /path/index.html so GitHub Pages resolves clean URLs without a server.
  trailingSlash: true,
};

export default nextConfig;
