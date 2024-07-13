'use client'

import { useState } from 'react'
import { IInvitation } from '@/types'

const usePagination = ({ invitations }: { invitations: IInvitation[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, _] = useState(10)
  const pageCount = Math.ceil(invitations.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = invitations.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return {
    pageCount,
    currentPage,
    currentItems,
    paginate
  }
}
export default usePagination
