import { createMessage } from '@/lib/database/message.action'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()

    if (!data) throw new Error('Data not found')
    await createMessage(data)
    return NextResponse.json({ message: 'Message created successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
