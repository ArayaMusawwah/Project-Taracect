/** @type {import('next').NextConfig} */
import dotenvExpand from 'dotenv-expand'

// const dotenvExpand = require("dotenv-expand");


dotenvExpand.expand({ parsed: { ...process.env } });

const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
  }
}

export default nextConfig
