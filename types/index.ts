export interface IMessage {
  _id?: string
  nama: string
  ucapan: string
  date: Date
}

export interface IInvitation {
  _id?: string
  name: string
  url: string
  isCompleted: boolean
}
