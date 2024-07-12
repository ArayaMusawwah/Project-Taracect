import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.url.includes('?key=354')) return NextResponse.next()
  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: '/buat-undangan/:path*'
}

/* import { NextResponse, type NextRequest } from 'next/server'

const corsOptions: {
  allowedMethods: string[]
  allowedOrigins: string[]
  allowedHeaders: string[]
  exposedHeaders: string[]
  maxAge?: number
  credentials: boolean
} = {
  allowedMethods: (process.env?.ALLOWED_METHODS || '').split(','),
  allowedOrigins: (process.env?.ALLOWED_ORIGIN || '').split(','),
  allowedHeaders: (process.env?.ALLOWED_HEADERS || '').split(','),
  exposedHeaders: (process.env?.EXPOSED_HEADERS || '').split(','),
  maxAge: (process.env?.MAX_AGE && parseInt(process.env?.MAX_AGE)) || undefined, // 60 * 60 * 24 * 30, // 30 days
  credentials: process.env?.CREDENTIALS == 'true'
}

export async function middleware(request: NextRequest) {
  // Response
  const response = NextResponse.next()

  // Allowed origins check
  const origin = request.headers.get('origin') ?? ''
  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  // Set default CORS headers
  response.headers.set('Access-Control-Allow-Credentials', corsOptions.credentials.toString())
  response.headers.set('Access-Control-Allow-Methods', corsOptions.allowedMethods.join(','))
  response.headers.set('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','))
  response.headers.set('Access-Control-Expose-Headers', corsOptions.exposedHeaders.join(','))
  response.headers.set('Access-Control-Max-Age', corsOptions.maxAge?.toString() ?? '')

  // Return
  return response
}

export const config = {
  matcher: '/api/:path*'
}
 */
