'use client'

import { useRef, useState } from 'react'

import TheForm from './TheForm'
import TheTable from './TheTable'
import { IInvitation } from '@/types'

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [template, setTemplate] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const [invitations, setInvitations] = useState<IInvitation[]>([])

  return (
    <main className="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-4xl">
      <TheForm
        inputRef={inputRef}
        textareaRef={textareaRef}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setTemplate={setTemplate}
      />

      <TheTable template={template} />
    </main>
  )
}
export default Main
