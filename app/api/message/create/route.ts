import { createMessage } from '@/lib/database/message.action'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 *
 * @param origin
 * @returns
 */
const getCorsHeaders = (origin: string) => {
  // Default options
  const headers = {
    'Access-Control-Allow-Methods': `${process.env.ALLOWED_METHODS}`,
    'Access-Control-Allow-Headers': `${process.env.ALLOWED_HEADERS}`,
    'Access-Control-Allow-Origin': `${process.env.DOMAIN_URL}`
  }

  // If no allowed origin is set to default server origin
  if (!process.env.ALLOWED_ORIGIN || !origin) return headers

  // If allowed origin is set, check if origin is in allowed origins
  const allowedOrigins = process.env.ALLOWED_ORIGIN.split(',')

  // Validate server origin
  if (allowedOrigins.includes('*')) {
    headers['Access-Control-Allow-Origin'] = '*'
  } else if (allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
  }

  // Return result
  return headers
}

export const OPTIONS = async (request: NextRequest) => {
  // Return Response
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: getCorsHeaders(request.headers.get('origin') || '')
    }
  )
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()

    if (!data) throw new Error('Data not found')
    await createMessage(data)
    revalidatePath('/')
    return NextResponse.json({ message: 'Message created successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
