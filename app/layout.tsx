import type { Metadata } from 'next'
import { Work_Sans, Sacramento, Lobster, Libre_Baskerville } from 'next/font/google'
import '@/styles/globals.css'
import { data } from '@/data'
import { toCapitalize } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster'
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-work-sans'
})
const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sacramento'
})

export const metadata: Metadata = {
  title: `${toCapitalize(data.mempelai.keduaMempelai)} - Undangan Pernikahan`,
  description: `Undangan Pernikahan ${toCapitalize(data.mempelai.keduaMempelai)}`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${sacramento.variable} ${lobster.variable} ${libreBaskerville.variable}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
