import { getAllInvitation } from '@/lib/database/actions/invitation.action'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const data = await getAllInvitation()
    revalidatePath('/')
    if (data.length === 0) throw new Error('Data not found')
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}
