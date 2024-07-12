import { deleteInvitation } from '@/lib/database/actions/invitation.action'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const DELETE = async (req: Request) => {
  const { id } = await req.json()
  try {
    await deleteInvitation(id)
    revalidatePath('/')
    return NextResponse.json({ message: 'Invitation deleted successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}
