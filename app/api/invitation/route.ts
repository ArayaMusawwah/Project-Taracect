import { getAllInvitation } from '@/lib/database/actions/invitation.action'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const data = await getAllInvitation()

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}
