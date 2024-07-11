'use client'

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
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Checkbox } from '@/components/ui/checkbox'
import { FaLink } from 'react-icons/fa6'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { IInvitation } from '@/types'
import axios from 'axios'

const TheTable = ({ template }: { template: string }) => {
  const [invitations, setInvitations] = useState<IInvitation[]>([])
  console.log('TheTable ~ invitations=>', invitations)

  const fetchInvitations = async () => {
    const res = await axios.get('https://taratect.vercel.app/api/invitation')
    setInvitations(res.data.data)
  }

  useEffect(() => {
    fetchInvitations()
  }, [])

  const replaceLinkNama = (link: string) => {
    const regex = /{link_tamu}/g

    if (template === '') return link
    return template.replace(regex, link)
  }

  return (
    <Table className="">
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
        {invitations.map((invitation) => (
          <TableRow key={invitation._id} className="bg-gray">
            <TableCell>
              <Checkbox
                className="size-6"
                defaultChecked={invitation.isCompleted}
                onCheckedChange={() => (invitation.isCompleted = !invitation.isCompleted)}
              />
            </TableCell>

            <TableCell className={`max-w-[200px] ${invitation.isCompleted ? 'line-through' : ''}`}>
              {invitation.name}
            </TableCell>

            <TableCell className="w-full text-center">
              <Link
                href={invitation.url}
                target="_blank"
                className="break-keep text-center text-blue-600"
              >
                {invitation.url}
              </Link>
            </TableCell>

            <TableCell>
              <div className="flex items-center justify-center gap-1 max-md:flex-col">
                <Button className="flex-1 bg-blue-500">Edit</Button>

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

                <Button variant={'destructive'} className="flex-1">
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
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
