'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableHeader
} from '@/components/ui/table'
import { useState } from 'react'
import { IInvitation } from '@/types'
import { VscLoading } from 'react-icons/vsc'
import TableRowComp from './TableRowComp'
import { TablePagination } from './TablePagination'

interface Props {
  template: string
  invitations: IInvitation[]
  isLoading: boolean
  pageCount: number
  currentItems: IInvitation[]
  currentPage: number
  setInvitations: React.Dispatch<React.SetStateAction<IInvitation[]>>
  paginate: (pageNumber: number) => void
}

const TheTable = ({
  template,
  invitations,
  isLoading,
  pageCount,
  currentItems,
  currentPage,
  setInvitations,
  paginate
}: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editingId, setEditingId] = useState('')
  const [editingValue, setEditingValue] = useState<IInvitation[]>()

  return (
    <Table>
      <TableCaption>Daftar nama yang anda undang</TableCaption>
      <TableHeader>
        <TableRow className="*:text-center">
          <TableHead>Sudah</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Alamat Url</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell colSpan={4}>
              <VscLoading className="mx-auto animate-spin text-3xl" />
            </TableCell>
          </TableRow>
        ) : (
          <TableRowComp
            invitations={invitations}
            currentItems={currentItems}
            template={template}
            setIsEdit={setIsEdit}
            setEditingId={setEditingId}
            setInvitations={setInvitations}
            isEdit={isEdit}
            editingId={editingId}
            editingValue={editingValue!}
            setEditingValue={setEditingValue as React.Dispatch<React.SetStateAction<IInvitation[]>>}
          />
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="text-center">
            <TablePagination pageCount={pageCount} currentPage={currentPage} paginate={paginate} />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={3} className="text-center">
            Total
          </TableCell>
          <TableCell className="text-left">{invitations.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
export default TheTable
