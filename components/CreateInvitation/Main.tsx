'use client'

import { useEffect, useRef, useState } from 'react'

import TheForm from './TheForm'
import TheTable from './TheTable'
import { IInvitation } from '@/types'
import axios from 'axios'
import { handleError } from '@/lib/utils'
import usePagination from '@/hooks/usePagination'

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  let windowLocalStorage
  if (typeof window !== 'undefined') {
    windowLocalStorage = localStorage.getItem('template') || ''
  }

  const [template, setTemplate] = useState(windowLocalStorage || '')
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [invitations, setInvitations] = useState<IInvitation[]>([])

  useEffect(() => {
    localStorage.setItem('template', template)
  }, [template])

  useEffect(() => {
    fetchInvitations()
  }, [setInvitations])

  const { pageCount, currentItems, currentPage, paginate } = usePagination({ invitations })

  const fetchInvitations = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/invitation`)
      setInvitations(res.data.data)
    } catch (error) {
      handleError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="w-full max-w-sm rounded-lg bg-stone-200 p-5 text-center shadow-lg shadow-stone-500/30 md:max-w-4xl">
      <TheForm
        inputRef={inputRef}
        textareaRef={textareaRef}
        isEditing={isEditing}
        template={template}
        setIsEditing={setIsEditing}
        setTemplate={setTemplate}
        fetchInvitations={fetchInvitations}
      />

      <TheTable
        template={template}
        invitations={invitations}
        isLoading={isLoading}
        pageCount={pageCount}
        currentItems={currentItems}
        currentPage={currentPage}
        setInvitations={setInvitations}
        paginate={paginate}
      />
    </main>
  )
}
export default Main
