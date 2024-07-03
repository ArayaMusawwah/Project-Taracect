'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import Wayangs from '../Shared/Wayangs'
import ModalForm from './ModalForm'
import Card from './Card'
import { useEffect, useState } from 'react'
import { IMessage } from '@/lib/database/message.model'

const Ucapan = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [messages, setMessages] = useState<IMessage[]>()

  const fetchMessages = async () => {
    const res = await fetch('https://taratect.vercel.app/api/message', {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const data = await res.json()

    return setMessages(data.data)
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-10 text-center text-black"
      id="ucapan"
    >
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="h-[82vh] w-full overflow-hidden bg-main-accent3 px-8 py-4">
          <h1 className="mb-4 font-lobster text-3xl font-bold">Ucapan & Doa</h1>

          <div className="space-y-1">
            <p className="text-sm italic">Berniat Untuk Mengirim Ucapan & Doa?</p>
            <ModalForm fetchMessages={fetchMessages} />
          </div>

          <p className="my-2 w-full text-right text-sm font-light italic">
            Total Ucapan: {messages?.length}
          </p>
          <div className="flex max-h-[70%] flex-col gap-4 overflow-y-scroll pb-10">
            {messages?.map((message) => <Card key={message._id} {...message} />)}
          </div>
          {/* <PaginationUi /> */}
        </div>
      </div>
      <Wayangs isBoneka={isDesktop} />
    </section>
  )
}
export default Ucapan
