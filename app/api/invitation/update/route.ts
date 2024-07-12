import { updateInvitation } from '@/lib/database/actions/invitation.action'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const PATCH = async (req: Request) => {
  const { id, data } = await req.json()

  try {
    await updateInvitation(id, data)
    revalidatePath('/')
    return NextResponse.json({ message: 'Invitation updated successfully', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}