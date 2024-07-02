import { IMessage } from '@/lib/database/message.model'

const Card = ({ nama, ucapan }: IMessage) => {
  return (
    <div className="mx-1 rounded-md bg-white px-2 py-1">
      <h4 className="text-lg font-semibold">{nama}</h4>
      <p className="text-center">{ucapan}</p>
    </div>
  )
}

export default Card
