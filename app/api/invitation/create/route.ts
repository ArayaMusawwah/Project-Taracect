import { createInvitation } from '@/lib/database/actions/invitation.action'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const data = await req.json()

  try {
    await createInvitation(data)
    revalidatePath('/buat-undangan')
    return NextResponse.json({ message: 'Invitation created successfully', data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
