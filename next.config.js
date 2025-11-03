/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔥 ceci permet l'export statique
  images: { unoptimized: true },
};

export default nextConfig;
