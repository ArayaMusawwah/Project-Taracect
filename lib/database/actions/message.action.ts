'use server'

import { IMessage } from '@/types'
import { connectToDatabase } from '..'
import Message from '../models/message.model'

export const createMessage = async (message: IMessage) => {
  try {
    await connectToDatabase()
    const newMessage = await Message.create(message)

    return JSON.parse(JSON.stringify(newMessage))
  } catch (error) {
    console.log(error)
  }
}

export const getAllMessage = async () => {
  try {
    await connectToDatabase()
    const message = await Message.find({}).sort({ date: -1 })

    if (!message) throw new Error('Message not found')

    return JSON.parse(JSON.stringify(message))
  } catch (err) {
    console.log(err)
  }
}