import { IMessage } from '@/types'
import moment from 'moment'
import { CiClock1 } from 'react-icons/ci'
const Card = ({ nama, ucapan, date }: IMessage) => {
  return (
    <div className="mx-1 rounded-md bg-white px-2 py-1">
      <h4 className="text-lg font-semibold">{nama}</h4>
      <p className="text-center">{ucapan}</p>
      <p className="flex items-center justify-end space-x-1 text-xs font-light italic text-gray-700">
        <CiClock1 className="inline" />
        <span>{moment(date).fromNow()}</span>
      </p>
    </div>
  )
}

export default Card
