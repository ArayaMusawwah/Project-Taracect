import { IMessage } from '@/types'
import ModalForm from './ModalForm'
import Card from './Card'

const CardContainer = ({ data }: { data: IMessage[] }) => {
  return (
    <div className="h-[82vh] w-full overflow-hidden bg-main-accent3 px-8 py-4">
      <h1 className="mb-4 font-lobster text-3xl font-bold">Ucapan & Doa</h1>

      <div className="space-y-1">
        <p className="text-sm italic">Berniat Untuk Mengirim Ucapan & Doa?</p>
        <ModalForm />
      </div>

      <p className="my-2 w-full text-right text-sm font-light italic">
        Total Ucapan: {data?.length}
      </p>
      <div className="flex max-h-[70%] flex-col gap-4 overflow-y-scroll pb-10">
        {data?.map((message) => <Card key={message._id} {...message} />)}
      </div>
      {/* <PaginationUi /> */}
    </div>
  )
}
export default CardContainer
