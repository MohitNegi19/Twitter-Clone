const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["www.iconsdb.com","rb.gy"]
  }
}
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig
