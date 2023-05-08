/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/promo-code',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
