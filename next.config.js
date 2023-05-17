/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        minimumCacheTTL: 60,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
