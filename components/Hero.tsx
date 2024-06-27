'use client'

import { resepsi } from '@/data'
import useMediaQuery from '@/hooks/useMediaQuery'
import { replaceDanToAmpersand } from '@/lib/utils'
import Link from 'next/link'
import { Snowfall } from 'react-snowfall'

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className="text-center text-white">
      <div className="relative z-10">
        <div className="mb-8">
          <p>The Wedding Of</p>
          <h1 className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
            {resepsi.nama_mempelai}
          </h1>
          <p>Kepada Bapak/Ibu/Saudara/i Yth: </p>
          <h2 className="mt-4 text-3xl font-semibold">
            {replaceDanToAmpersand('Araya dan Keluarga')}
          </h2>
          <p>Ditempat</p>
        </div>

        <Link
          href="#"
          className="my-4 rounded-sm bg-main-accent1 px-4 py-2 text-white hover:text-main-accent2"
        >
          Lihat Undangan
        </Link>
      </div>

      <Snowfall snowflakeCount={isMobile ? 50 : 150} />
    </section>
  )
}
export default Hero
