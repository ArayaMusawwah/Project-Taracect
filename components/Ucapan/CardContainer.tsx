import { IMessage } from '@/types'
import ModalForm from './ModalForm'
import Card from './Card'
import { Suspense } from 'react'
import { MotionDiv, MotionH1 } from '../Shared/MotionTag'

const variants = {
  hidden: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const parentVariants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'linear', staggerChildren: 0.8 }
  }
}

const CardContainer = ({
  data,
  fetchData
}: {
  data: IMessage[]
  fetchData: () => Promise<void>
}) => {
  return (
    <div className="h-[82vh] w-full overflow-hidden bg-main-accent3 px-8 py-4">
      <MotionDiv
        variants={parentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <MotionH1 className="mb-4 font-lobster text-3xl font-bold" variants={variants}>
          Ucapan & Doa
        </MotionH1>

        <MotionDiv className="space-y-1" variants={variants}>
          <p className="text-sm italic">Berniat Untuk Mengirim Ucapan & Doa?</p>
          <Suspense>
            <ModalForm fetchData={fetchData} />
          </Suspense>
        </MotionDiv>

        <p className="my-2 w-full text-right text-sm font-light italic">
          Total Ucapan: {data.length}
        </p>
        <MotionDiv
          className="flex max-h-[70%] flex-col gap-4 overflow-y-scroll pb-10"
          variants={variants}
        >
          {data.length > 0 && data.map((message) => <Card key={message._id} {...message} />)}
        </MotionDiv>
      </MotionDiv>

      {/* <PaginationUi /> */}
    </div>
  )
}
export default CardContainer
