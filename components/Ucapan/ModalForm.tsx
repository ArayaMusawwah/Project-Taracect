'use client'

import { FaEnvelope } from 'react-icons/fa'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import { useRef } from 'react'
import { getAllMessage } from '@/lib/database/message.action'
import { IMessage } from '@/types'

const ModalForm = ({
  setMessages,
  reFetch
}: {
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
  reFetch: () => Promise<IMessage[]>
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const ucapanRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async () => {
    const data = {
      nama: inputRef.current?.value,
      ucapan: ucapanRef.current?.value,
      date: new Date()
    }

    try {
      const res = await fetch('https://taratect.vercel.app/api/message/create', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (res.status === 200) reFetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="rounded-lg bg-main-accent1 px-10 py-1 text-white">
          Buat Pesan <FaEnvelope className="ms-3 inline" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-lg border-2 border-main-accent2 bg-main-accent1 shadow-xl shadow-main-accent2/50">
        <AlertDialogHeader>
          <div className="w-full space-y-1 rounded-lg bg-main-accent1 py-4">
            <AlertDialogTitle className="mb-4 text-center font-lobster text-lg text-white sm:text-xl">
              Berikan Ucapan & Doa Kepada Kami
            </AlertDialogTitle>
            <form className="space-y-2 px-4 text-white *:placeholder:text-sm *:placeholder:italic *:placeholder:text-white">
              <input
                type="text"
                placeholder="Nama..."
                name="nama"
                ref={inputRef}
                className="w-full border-2 border-main-accent3 bg-transparent px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
              <textarea
                placeholder="Berikan Ucapan & Doa..."
                name="ucapan"
                ref={ucapanRef}
                className="w-full resize-none border-2 border-main-accent3 bg-transparent px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </form>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex justify-center">
          <AlertDialogCancel className="bg-main-accent6">Batal</AlertDialogCancel>
          <AlertDialogAction className="bg-main-accent5 text-slate-50" onClick={handleSubmit}>
            Kirim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalForm
