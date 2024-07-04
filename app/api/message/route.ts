import { getAllMessage } from '@/lib/database/message.action'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    try {
      const data = await getAllMessage()
      return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 402 })
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
