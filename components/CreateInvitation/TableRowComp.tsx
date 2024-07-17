import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { TableCell, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'react-toastify'
import axios from 'axios'
import { handleError } from '@/lib/utils'
import { IInvitation } from '@/types'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'
import { VscLoading } from 'react-icons/vsc'
import TableDrawer from './TableDrawer'
interface Props {
  template: string
  invitations: IInvitation[]
  isEdit: boolean
  editingId: string
  editingValue: IInvitation[]
  currentItems: IInvitation[]
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
  setEditingValue: React.Dispatch<React.SetStateAction<IInvitation[]>>
  setEditingId: React.Dispatch<React.SetStateAction<string>>
  setInvitations: React.Dispatch<React.SetStateAction<IInvitation[]>>
}

const TableRowComp = ({
  template,
  invitations,
  isEdit,
  editingId,
  editingValue,
  currentItems,
  setIsEdit,
  setInvitations,
  setEditingValue,
  setEditingId
}: Props) => {
  // const checkedInv: IInvitation[] = []
  const [checkedInv, setCheckedInv] = useState([])
  const [loadingDelete, setLoadingDelete] = useState(false)

  const debouncedUpdate = useDebouncedCallback(async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/invitation/update`, {
        data: checkedInv
      })
    } catch (error) {
      handleError(error as Error)
    } finally {
      setCheckedInv([])
    }
  }, 1000)

  const handleCheck = (invitation: IInvitation) => {
    const checkedInvitations = invitations.filter(
      (invitation: IInvitation) => invitation.isCompleted
    )
    const allChecked = invitations.length === checkedInvitations.length

    const toggleCheck = async (invitation: IInvitation) => {
      const newInvitations = invitations.map((i: IInvitation) => {
        if (i._id === invitation._id) {
          return { ...i, isCompleted: !i.isCompleted }
        }
        return i
      })
      setCheckedInv(
        (prev) => [...prev, { ...invitation, isCompleted: !invitation.isCompleted }] as never[]
      )
      setInvitations(newInvitations)
      debouncedUpdate()
    }

    if (invitation) {
      toggleCheck(invitation)
    } else if (allChecked) {
      setInvitations(invitations.map((i: IInvitation) => ({ ...i, isCompleted: false })))
    } else {
      setInvitations(invitations.map((i: IInvitation) => ({ ...i, isCompleted: true })))
    }
  }

  const handleDelete = async (id: string) => {
    setLoadingDelete(true)
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/api/invitation/delete`, { data: { id } })
      .then(() => {
        toast.success('Data deleted successfully')
        setInvitations(invitations.filter((invitation: IInvitation) => invitation._id !== id))
      })
      .catch((err) => handleError(err as Error))
      .finally(() => setLoadingDelete(false))
  }

  const handleInputChange = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
    invitation: IInvitation
  ) => {
    const newInvitations = invitations.map((i: IInvitation) => {
      if (i._id === invitation._id) {
        return {
          ...i,
          name: value,
          url: `${process.env.NEXT_PUBLIC_URL}/?to=${encodeURIComponent(value)}`
        }
      }
      return i
    })
    setEditingValue(newInvitations)
  }

  const handleChangeToDB = async (id: string) => {
    setIsEdit(false)
    setInvitations(editingValue!)
    const edited = editingValue?.find((edit: IInvitation) => edit._id === id)

    if (edited)
      await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/invitation/update`, { data: edited })
  }

  return currentItems.map((invitation: IInvitation) => (
    <TableRow key={invitation._id}>
      <TableCell>
        <Checkbox
          className="size-6"
          defaultChecked={invitation.isCompleted}
          onCheckedChange={() => handleCheck(invitation)}
        />
      </TableCell>

      <TableCell
        className={`max-w-[200px] capitalize ${invitation.isCompleted ? 'line-through' : ''}`}
      >
        {isEdit && editingId === invitation._id ? (
          <input
            type="text"
            defaultValue={invitation.name}
            autoFocus
            className="rounded-sm border border-gray-500 px-2"
            onChange={(e) => handleInputChange(e, invitation)}
          />
        ) : (
          <span>{invitation.name}</span>
        )}
      </TableCell>

      <TableCell className="w-full text-center">
        <Link
          href={invitation.url}
          target="_blank"
          className="break-keep text-center text-blue-600"
        >
          <span>{invitation.url}</span>
        </Link>
      </TableCell>

      <TableCell>
        <div className="flex items-center justify-center gap-1 max-md:flex-col">
          {isEdit && editingId === invitation._id ? (
            <Button
              className="flex-1 bg-blue-500"
              onClick={() => handleChangeToDB(invitation._id!)}
            >
              Save
            </Button>
          ) : (
            <Button
              className="flex-1 bg-blue-500"
              onClick={() => {
                setEditingId(invitation._id!)
                setIsEdit(true)
              }}
            >
              Edit
            </Button>
          )}

          <TableDrawer invitation={invitation} template={template} />

          <Button
            variant={'destructive'}
            className="flex-1 hover:bg-red-800"
            onClick={() => handleDelete(invitation._id!)}
          >
            {loadingDelete ? <VscLoading className="inline animate-spin text-2xl" /> : 'Delete'}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  ))
}
export default TableRowComp
