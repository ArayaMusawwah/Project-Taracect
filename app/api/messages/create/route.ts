import { createMessage } from '@/lib/database/actions/message.action'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()

    await createMessage(data).then(() => revalidatePath('/'))
    return NextResponse.json({ message: 'Message created successfully', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
