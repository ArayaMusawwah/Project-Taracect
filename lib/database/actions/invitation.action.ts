'use server'

import { IInvitation } from '@/types'
import { connectToDatabase } from '..'
import Invitation from '../models/invitation.model'
import { handleError } from '@/lib/utils'

export const createInvitation = async (invitation: IInvitation) => {
  try {
    await connectToDatabase()
    const newInvitation = await Invitation.create(invitation)

    return JSON.parse(JSON.stringify(newInvitation))
  } catch (error) {
    handleError(error as Error)
  }
}

export const getAllInvitation = async () => {
  try {
    await connectToDatabase()
    const invitation = await Invitation.find({}).sort({ date: -1 })

    if (!invitation) throw new Error('Invitation not found')

    return JSON.parse(JSON.stringify(invitation))
  } catch (err) {
    handleError(err as Error)
  }
}

export const deleteInvitation = async (id: string) => {
  try {
    await connectToDatabase()
    await Invitation.findByIdAndDelete(id)
  } catch (error) {
    handleError(error as Error)
  }
}

export const updateInvitation = async (id: string, data: IInvitation) => {
  try {
    await connectToDatabase()
    await Invitation.findByIdAndUpdate(id, data)
  } catch (error) {
    handleError(error as Error)
  }
}
