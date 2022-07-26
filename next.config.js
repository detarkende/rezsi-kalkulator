const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
	reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    cacheStartUrl: false
  }
});
