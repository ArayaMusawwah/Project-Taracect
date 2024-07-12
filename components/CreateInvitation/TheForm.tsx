import { Separator } from '@/components/ui/separator'
import { Button } from '../ui/button'
import { FaInfoCircle } from 'react-icons/fa'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import axios from 'axios'
import { IInvitation } from '@/types'
import { useState } from 'react'
import { VscLoading } from 'react-icons/vsc'

interface Props {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  setTemplate: React.Dispatch<React.SetStateAction<string>>
  fetchInvitations: () => Promise<void>
  inputRef: React.RefObject<HTMLInputElement>
  textareaRef: React.RefObject<HTMLTextAreaElement>
  isEditing: boolean
}

const TheForm = ({
  setIsEditing,
  setTemplate,
  fetchInvitations,
  inputRef,
  textareaRef,
  isEditing
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateTemplate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing((prev) => !prev)
    if (!isEditing) return
    setTemplate(textareaRef?.current?.value as string)
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current?.value.trim() === '') return
    const text = inputRef?.current?.value.trim()
    const url = `https://taratect.vercel.app/?to=${encodeURIComponent(text as string)}`

    try {
      setIsLoading(true)
      await axios
        .post('https://taratect.vercel.app/api/invitation/create', {
          name: text as string,
          url,
          isCompleted: false
        })
        .then(() => {
          fetchInvitations()
        })
        .finally(() => {
          setIsLoading(false)
        })
    } catch (error) {
      console.log(error)
    }

    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <form onSubmit={handleCreate} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nama undangan"
          className="w-full rounded-md px-4 py-1"
          ref={inputRef}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <VscLoading className="inline animate-spin text-2xl" /> : 'Tambah'}
        </Button>
      </form>

      <Separator className="my-5 bg-gray-500" />

      <Popover>
        <PopoverTrigger asChild>
          <button className="mx-2 block animate-pulse">
            <FaInfoCircle className="inline text-lg text-gray-600" />{' '}
            <span className="text-sm font-light italic">info</span>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <div className="flex justify-between space-x-4 text-left">
            <div className="space-y-2 text-xs md:text-sm">
              <p>
                Fitur ini digunakan untuk membuat template pesan yang dinamis untuk langsung
                di-share.
              </p>
              <p>
                jika anda ingin menyisipkan link yang dinamis di tengah-tengah pesan, maka tambahkan
                kata &quot; <span className="text-red-500">&#123;link_tamu&#125;</span> &quot;{' '}
                <span className="font-light italic">(tanpa tanda kutip).</span>
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <form className="mt-2 flex flex-col gap-3" onSubmit={handleCreateTemplate}>
        <textarea
          ref={textareaRef}
          placeholder="buat template pesan (tidak wajib)"
          className="w-full rounded-md px-4 py-1 disabled:bg-gray-300 disabled:text-gray-500"
          disabled={!isEditing}
        />

        {isEditing ? (
          <Button className="bg-blue-500 hover:bg-blue-400">Simpan</Button>
        ) : (
          <Button className="bg-green-500 hover:bg-green-400">Ubah</Button>
        )}
      </form>
    </div>
  )
}
export default TheForm
