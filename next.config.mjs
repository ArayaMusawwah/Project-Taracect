/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/message',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization'
          }
        ]
      }
    ]
  },

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
