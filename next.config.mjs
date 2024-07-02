/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/api/message',
        destination: '/api/message',
        locale: false,
        has: [
          {
            type: 'header',
            key: 'Cache-Control',
            value: 'no-cache, no-store'
          }
        ]
      }
    ]
  }
}

export default nextConfig
