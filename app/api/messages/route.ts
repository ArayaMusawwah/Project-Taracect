import { getAllMessage } from '@/lib/database/message.action'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const data = await getAllMessage()
    revalidatePath('/')

    if (!data) throw new Error('Data not found')
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}
