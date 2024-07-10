'use client'

import { useRef, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const invitations: { id: number; name: string; url: string }[] = []

const InvitationPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [url, setUrl] = useState('')
  const [template, setTemplate] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    const text = inputRef?.current?.value

    const url = `https://taratect.vercel.app/?to=${encodeURIComponent(text as string)}`

    setUrl(url)
    invitations.push({ id: invitations.length + 1, name: text as string, url })

    text && (inputRef.current.value = '')
  }

  const handleCreateTemplate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing((prev) => !prev)
    if (!isEditing) return
    setTemplate(textareaRef?.current?.value as string)
  }

  const text = `${url}\n\n${template}`

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-3xl font-bold">Buat & Bagikan Undanganmu.</h1>
      <main className="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-5xl">
        <div>
          <form onSubmit={handleCreate} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nama undangan"
              className="w-full rounded-md px-4 py-1"
              ref={inputRef}
            />
            <Button type="submit">Tambah</Button>
          </form>

          <Separator className="my-5 bg-gray-500" />

          <form className="flex flex-col gap-3" onSubmit={handleCreateTemplate}>
            <textarea
              ref={textareaRef}
              placeholder="buat template (tidak wajib)"
              className="w-full rounded-md px-4 py-1"
              disabled={!isEditing}
            />
            {isEditing ? <Button>Save</Button> : <Button>Edit</Button>}
          </form>
        </div>

        <Table className="border-collapse">
          <TableCaption>A list of your invitations.</TableCaption>
          <TableHeader>
            <TableRow className="*:text-center">
              <TableHead>Nama</TableHead>
              <TableHead>Alamat Url</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invitations.map((invitation) => (
              <TableRow key={invitation.id}>
                <TableCell className="max-w-[200px]">{invitation.name}</TableCell>
                <TableCell className="flex w-full max-w-[200px] flex-wrap break-all text-center">
                  <Link
                    href={invitation.url}
                    target="_blank"
                    className="break-all text-center text-blue-600"
                  >
                    {invitation.url}
                  </Link>
                </TableCell>
                <TableCell>
                  <Button className="bg-blue-500">Edit</Button>
                  <CopyToClipboard
                    text={`${template}\n\n${invitation.url}`}
                    onCopy={() => toast.success('Copied to clipboard!')}
                  >
                    <Button className="bg-green-500">Share</Button>
                  </CopyToClipboard>
                  <Button variant={'destructive'}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2} className="text-center">
                Total
              </TableCell>
              <TableCell className="text-left">{invitations.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </main>
    </div>
  )
}
export default InvitationPage
