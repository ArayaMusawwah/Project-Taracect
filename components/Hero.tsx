'use client'

import { resepsi } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import Countdown from 'react-countdown'

interface rendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const renderer = ({ days, hours, minutes, seconds, completed }: rendererProps) => {
  if (completed) {
    return <h1>asu</h1>
  } else {
    return (
      <div className="inline-flex space-x-2 *:flex *:size-16 *:flex-col *:items-center *:justify-center *:rounded-full *:bg-pink-700 *:text-sm md:space-x-4 md:*:size-20">
        <div>
          {days}
          <span className="block">Hari</span>
        </div>
        <div>
          {hours}
          <span className="block">Jam</span>
        </div>
        <div>
          {minutes}
          <span className="block">Menit</span>
        </div>
        <div>
          {seconds}
          <span className="block">Detik</span>
        </div>
      </div>
    )
  }
}

const Hero = () => {
  return (
    <section className="text-center text-white">
      <div className="relative z-10">
        <p>Kepada Bapak/Ibu/Saudara/i,</p>
        <h1 className="mb-4 mt-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
          {resepsi.nama_mempelai}
        </h1>
        <p>Akan melangsungkan resepsi pernikahan dalam:</p>

        <div className="my-4">
          <Countdown date={Date.parse(resepsi.tanggal_resepsi)} renderer={renderer} />
        </div>

        <Link
          href="#"
          className="rounded-sm bg-slate-200 px-2 py-1 text-black hover:text-main-accent2"
        >
          Lihat Undangan
        </Link>
      </div>
    </section>
  )
}
export default Hero
