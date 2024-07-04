'use client'

import { IMessage } from '@/types'
import { useEffect, useState } from 'react'
import ModalForm from './ModalForm'
import Card from './Card'
import { getAllMessage } from '@/lib/database/message.action'

const CardContainer = ({ data }: { data: IMessage[] }) => {
  const [messages, setMessages] = useState<IMessage[]>(data)

  const reFetch = async () => {
    const res = await fetch('https://taratect.vercel.app/api/message', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    return data
  }

  return (
    <div className="h-[82vh] w-full overflow-hidden bg-main-accent3 px-8 py-4">
      <h1 className="mb-4 font-lobster text-3xl font-bold">Ucapan & Doa</h1>

      <div className="space-y-1">
        <p className="text-sm italic">Berniat Untuk Mengirim Ucapan & Doa?</p>
        <ModalForm setMessages={setMessages} reFetch={reFetch} />
      </div>

      <p className="my-2 w-full text-right text-sm font-light italic">
        Total Ucapan: {messages?.length}
      </p>
      <div className="flex max-h-[70%] flex-col gap-4 overflow-y-scroll pb-10">
        {messages?.map((message) => <Card key={message._id} {...message} />)}
      </div>
      {/* <PaginationUi /> */}
    </div>
  )
}
export default CardContainer
