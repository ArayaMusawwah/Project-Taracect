import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  WhatsappIcon,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon
} from 'react-share'
import { TableCell, TableRow } from '@/components/ui/table'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Checkbox } from '@/components/ui/checkbox'
import { FaLink } from 'react-icons/fa6'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import axios from 'axios'
import { handleError } from '@/lib/utils'
import { IInvitation } from '@/types'

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
  const replaceLinkNama = (link: string) => {
    const regex = /{link_tamu}/g

    if (template === '') return link
    return template.replace(regex, link)
  }

  const handleCheck = async (invitation: IInvitation) => {
    const checkedInvitations = invitations.filter(
      (invitation: IInvitation) => invitation.isCompleted
    )
    const allChecked = invitations.length === checkedInvitations.length

    const toggleCheck = (invitation: IInvitation) => {
      const newInvitations = invitations.map((i: IInvitation) => {
        if (i._id === invitation._id) {
          return { ...i, isCompleted: !i.isCompleted }
        }
        return i
      })
      setInvitations(newInvitations)
    }

    if (invitation) {
      toggleCheck(invitation)
    } else if (allChecked) {
      setInvitations(invitations.map((i: IInvitation) => ({ ...i, isCompleted: false })))
    } else {
      setInvitations(invitations.map((i: IInvitation) => ({ ...i, isCompleted: true })))
    }
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/invitation/update`, { data: invitation })
    } catch (error) {
      handleError(error as Error)
    }
  }

  const handleDelete = async (id: string) => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/api/invitation/delete`, { data: { id } })
      .then(() => {
        toast.success('Data deleted successfully')
        setInvitations(invitations.filter((invitation: IInvitation) => invitation._id !== id))
      })
      .catch((err) => handleError(err as Error))
  }

  const handleChange = async (id: string) => {
    setIsEdit(false)
    setInvitations(editingValue!)
    const edited = editingValue?.find((edit: IInvitation) => edit._id === id)

    if (edited)
      await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/invitation/update`, { data: edited })
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newInvitations = invitations.map((i: IInvitation) => {
                if (i._id === invitation._id) {
                  return {
                    ...i,
                    name: e.target.value,
                    url: `${process.env.NEXT_PUBLIC_URL}/?to=${encodeURIComponent(e.target.value)}`
                  }
                }
                return i
              })

              setEditingValue(newInvitations)
            }}
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
            <Button className="flex-1 bg-blue-500" onClick={() => handleChange(invitation._id!)}>
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

          <Drawer>
            <DrawerTrigger asChild>
              <Button className="flex-1 bg-green-500">Share</Button>
            </DrawerTrigger>

            <DrawerContent className="flex items-center justify-center bg-stone-200">
              <div className="flex flex-col gap-4 py-6">
                <DrawerTitle className="text-center">
                  Bagikan ke {invitation.name} via:{' '}
                </DrawerTitle>

                <div className="flex justify-center gap-3">
                  <button className="size rounded-full bg-gray-500 p-2">
                    <CopyToClipboard
                      text={replaceLinkNama(invitation.url)}
                      onCopy={() => toast.success('Copied!')}
                    >
                      <FaLink className="text-3xl text-white" />
                    </CopyToClipboard>
                  </button>

                  <WhatsappShareButton url={replaceLinkNama(invitation.url)}>
                    <WhatsappIcon size={50} round />
                  </WhatsappShareButton>

                  <TelegramShareButton url={replaceLinkNama(invitation.url)}>
                    <TelegramIcon size={50} round />
                  </TelegramShareButton>

                  <EmailShareButton url={replaceLinkNama(invitation.url)}>
                    <EmailIcon size={50} round />
                  </EmailShareButton>

                  <FacebookShareButton url={replaceLinkNama(invitation.url)}>
                    <FacebookIcon size={50} round />
                  </FacebookShareButton>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          <Button
            variant={'destructive'}
            className="flex-1 hover:bg-red-800"
            onClick={() => handleDelete(invitation._id!)}
          >
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  ))
}
export default TableRowComp