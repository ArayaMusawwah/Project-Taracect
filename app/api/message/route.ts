import { getAllMessage } from '@/lib/database/message.action'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const messages = await getAllMessage()

    if (messages.length === 0) throw new Error('Message not found')
    return NextResponse.json({ data: messages }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
