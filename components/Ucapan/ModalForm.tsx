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
import { useRef, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ToastOptions, toast } from 'react-toastify'
import axios from 'axios'

const ModalForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const ucapanRef = useRef<HTMLTextAreaElement>(null)
  const [rsvp, setRsvp] = useState<string>()

  const toaster = (text: string, options = 'success') => {
    const value: ToastOptions = {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    }

    switch (options) {
      case 'success':
        toast.success(text, value)
        break
      case 'error':
        toast.error(text, value)
        break
    }
  }
  /* TODO: toast after submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      nama: inputRef.current?.value,
      ucapan: ucapanRef.current?.value,
      date: new Date()
    }

    try {
      await axios
        .post('/api/messages/create', data)
        .then(() => toaster('Pesan Terkirim!'))
        .catch(() => toaster('Pesan Gagal Terkirim!', 'error'))
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
            <AlertDialogTitle className="mb-4 text-center font-lobster text-lg font-light text-white sm:text-2xl">
              Berikan Ucapan & Doa Kepada Kami
            </AlertDialogTitle>
            <form
              className="space-y-2 px-4 text-white *:placeholder:text-sm *:placeholder:italic *:placeholder:text-white"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Nama..."
                name="nama"
                ref={inputRef}
                required
                className="w-full border-2 border-main-accent3 bg-transparent px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
              <textarea
                placeholder="Berikan Ucapan & Doa..."
                name="ucapan"
                ref={ucapanRef}
                required
                className="w-full resize-none border-2 border-main-accent3 bg-transparent px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
              <Select onValueChange={setRsvp}>
                <SelectTrigger className="w-full rounded-none border-2 border-main-accent3 bg-transparent focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400">
                  <SelectValue placeholder="Konfirmasi Kehadiran" />
                </SelectTrigger>
                <SelectContent className="!focus:ring-none bg-main-accent2 focus:bg-main-accent6">
                  <SelectItem value="hadir">Hadir</SelectItem>
                  <SelectItem value="tidak_hadir">Tidak Hadir</SelectItem>
                </SelectContent>
              </Select>

              <AlertDialogFooter className="flex justify-center">
                <AlertDialogCancel className="bg-main-accent6 text-black">Batal</AlertDialogCancel>
                <AlertDialogAction className="bg-main-accent5 text-slate-50" type="submit">
                  Kirim
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalForm
