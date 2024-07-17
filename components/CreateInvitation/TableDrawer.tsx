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
import { toast } from 'react-toastify'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { FaLink } from 'react-icons/fa6'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from '../ui/button'
import { IInvitation } from '@/types'

const TableDrawer = ({ template, invitation }: { template: string; invitation: IInvitation }) => {
  const replaceLinkNama = (link: string) => {
    const regex = /{link_tamu}/g

    if (template === '') return link
    return template.replace(regex, link)
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex-1 bg-green-500">Share</Button>
      </DrawerTrigger>

      <DrawerContent className="flex items-center justify-center bg-stone-200">
        <div className="flex flex-col gap-4 py-6">
          <DrawerTitle className="text-center">Bagikan ke {invitation.name} via: </DrawerTitle>

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
  )
}
export default TableDrawer
