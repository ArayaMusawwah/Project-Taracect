'use client'

import { useEffect, useRef, useState } from 'react'

import TheForm from './TheForm'
import TheTable from './TheTable'
import { IInvitation } from '@/types'
import axios from 'axios'

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [template, setTemplate] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const [invitations, setInvitations] = useState<IInvitation[]>([])

  const fetchInvitations = async () => {
    const res = await axios.get(`${process.env.PRODUCTION_URL}/api/invitation`)
    setInvitations(res.data.data)
  }

  useEffect(() => {
    fetchInvitations()
  }, [setInvitations])

  return (
    <main className="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-4xl">
      <TheForm
        inputRef={inputRef}
        textareaRef={textareaRef}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setTemplate={setTemplate}
        fetchInvitations={fetchInvitations}
      />

      <TheTable template={template} setInvitations={setInvitations} invitations={invitations} />
    </main>
  )
}
export default Main
