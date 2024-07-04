'use client'

import { formatDate } from '@/lib/utils'
import Wayangs from '../Shared/Wayangs'
import { data } from '@/data'
import CardDate from './CardDate'
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'

const Jadwal = () => {
  const jadwalResepsi = formatDate(data.resepsi.tanggal)
  const jadwalAkad = formatDate(data.akad.tanggal)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className="relative flex min-h-lvh w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-5xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="sm:pt-18 relative h-[82vh] w-full bg-main-accent3 px-4 py-20 pt-12 sm:h-[70vh] sm:px-10">
          <p className="mx-auto max-w-2xl text-pretty text-center text-sm leading-4 sm:text-lg">
            Tentunya dengan penuh rasa hormat, kami mengundang kehadiran Bapak/Ibu/Saudara/i dalam
            acara pernikahan kami yang akan dilaksanakan pada:
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <CardDate
              title="Akad Nikah"
              bulan={jadwalAkad.bulan}
              tahun={jadwalAkad.tahun}
              hari={jadwalAkad.hari}
              waktu={data.akad.waktu}
              tanggal={jadwalAkad.tanggal}
              lokasi={data.akad.alamat}
              maps={data.akad.maps}
            />
            <CardDate
              title="Resepsi"
              waktu={data.resepsi.waktu}
              bulan={jadwalResepsi.bulan}
              tahun={jadwalResepsi.tahun}
              hari={jadwalResepsi.hari}
              tanggal={jadwalResepsi.tanggal}
              lokasi={data.resepsi.alamat}
              maps={data.resepsi.maps}
            />
          </div>
        </div>

        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={150}
          height={100}
          className="absolute -left-20 -top-4 sm:-left-10 sm:top-4"
        />
        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={150}
          height={100}
          className="absolute -right-20 -top-4 sm:-right-10 sm:top-4"
        />
      </div>
      <Image
        src={'/newWayang.png'}
        alt="wayang"
        width={!isMobile ? 200 : 150}
        height={200}
        className="absolute -bottom-10 -right-16 z-20 rotate-12 sm:-bottom-14 sm:right-36"
      />
      <Image
        src={'/newWayang.png'}
        alt="wayang"
        width={!isMobile ? 200 : 150}
        height={200}
        className="absolute -bottom-10 -left-16 z-20 -rotate-12 sm:-bottom-14 sm:left-36"
      />

      <Wayangs />
    </section>
  )
}
export default Jadwal
