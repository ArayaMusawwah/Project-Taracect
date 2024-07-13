import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { IInvitation } from '@/types'

type Props = {
  pageCount: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export function TablePagination({ pageCount, currentPage, paginate }: Props) {
  /* currentPage? */

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
        </PaginationItem>

        {/* first page */}
        {currentPage > 2 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => paginate(1)}>1</PaginationLink>
          </PaginationItem>
        )}

        {/* ellipsis previous */}
        {currentPage - 2 > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => paginate(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage < pageCount && (
          <PaginationItem>
            <PaginationLink onClick={() => paginate(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* ellipsis Next */}
        {currentPage + 2 < pageCount && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* last page */}
        {pageCount !== currentPage && currentPage + 1 < pageCount && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => paginate(pageCount)}>{pageCount}</PaginationLink>
          </PaginationItem>
        )}

        {pageCount !== currentPage && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
