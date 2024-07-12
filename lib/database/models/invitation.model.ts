'use server'

import { IInvitation } from '@/types'
import mongoose, { Schema, models } from 'mongoose'

const invitationSchema = new Schema<IInvitation>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    url: { type: String },
    isCompleted: { type: Boolean, default: false }
  },
  { _id: false }
)

const Invitation = models.Invitation || mongoose.model('Invitation', invitationSchema)

export default Invitation
