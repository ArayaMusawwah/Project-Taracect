import { getAllMessage } from '@/lib/database/message.action'
import { NextResponse } from 'next/server'

export const GET = () => {
  try {
    getAllMessage()
      .then((data) => {
        return NextResponse.json({ data: data }, { status: 200 })
      })
      .catch((error) => {
        return NextResponse.json({ message: error }, { status: 402 })
      })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
