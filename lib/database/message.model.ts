import { IMessage } from '@/types'
import mongoose, { Schema, models } from 'mongoose'

const messageSchema = new Schema<IMessage>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    nama: { type: String, required: true },
    ucapan: { type: String, required: true },
    date: { type: Date, default: Date.now }
  },
  { _id: false }
)

const Message = models.Ucapan || mongoose.model('Ucapan', messageSchema)

export default Message
