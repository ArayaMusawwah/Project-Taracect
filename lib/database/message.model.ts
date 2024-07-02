import { Schema, model, models } from 'mongoose'

export interface IMessage {
  _id?: string
  nama: string
  ucapan: string
  date: Date
}

export const messageSchema = new Schema({
  nama: {
    type: String,
    required: [true, 'Name is required']
  },

  ucapan: {
    type: String,
    required: [true, 'Ucapan is required']
  },

  date: {
    type: Date,
    default: Date.now
  }
})

const Message = models.Ucapan || model('Ucapan', messageSchema)

export default Message
