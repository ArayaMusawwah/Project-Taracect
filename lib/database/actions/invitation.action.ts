'use server'

import { IInvitation } from '@/types'
import { connectToDatabase } from '..'
import Invitation from '../models/invitation.model'

export const createInvitation = async (invitation: IInvitation) => {
  try {
    await connectToDatabase()
    const newInvitation = await Invitation.create(invitation)

    return JSON.parse(JSON.stringify(newInvitation))
  } catch (error) {
    console.log(error)
  }
}

export const getAllInvitation = async () => {
  try {
    await connectToDatabase()
    const invitation = await Invitation.find({}).sort({ date: -1 })

    if (!invitation) throw new Error('Invitation not found')

    return JSON.parse(JSON.stringify(invitation))
  } catch (err) {
    console.log(err)
  }
}
