import type { Metadata } from 'next'
import { Work_Sans, Sacramento } from 'next/font/google'
import './globals.css'
import { resepsi } from '@/data'
import { toCapitalize } from '@/lib/utils'

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
  title: `${toCapitalize(resepsi.nama_mempelai)} - Undangan Pernikahan`,
  description: `Undangan Pernikahan ${toCapitalize(resepsi.nama_mempelai)}`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${sacramento.variable} `}>{children}</body>
    </html>
  )
}
