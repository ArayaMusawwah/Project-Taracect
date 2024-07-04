import { createMessage } from '@/lib/database/message.action'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()

    if (!data) throw new Error('Data not found')
    await createMessage(data)

    revalidatePath('/')
    return NextResponse.json({ message: 'Message created successfully', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
