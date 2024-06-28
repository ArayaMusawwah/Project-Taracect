'use client'

import { resepsi } from '@/data'
import { replaceDanToAmpersand } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

const Title = () => {
  const searchParams = useSearchParams()
  const tamu = searchParams.get('to')
  return (
    <div className="mb-8">
      <p>The Wedding Of</p>
      <h1 className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
        {resepsi.nama_mempelai}
      </h1>
      <p>Kepada Bapak/Ibu/Saudara/i Yth: </p>
      <h2 className="mt-4 text-3xl font-semibold">
        {replaceDanToAmpersand(tamu || 'Tamu Pernikahan')}
      </h2>
      <p className="text-lg">Ditempat</p>
    </div>
  )
}
export default Title
