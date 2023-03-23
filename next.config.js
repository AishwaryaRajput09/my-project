/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // what the below code do is to tell nextjs to look for tailwind.config.js in the root directory
  experimental: { 
    appDir : true,

  }, 
}

module.exports = nextConfig
