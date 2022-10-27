/** @type {import('next').NextConfig} */

const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()({});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
