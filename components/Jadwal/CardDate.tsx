import { FaMapLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  title: string
  waktu: string
  tanggal: number
  bulan: string
  tahun: number
  hari: string
  lokasi: string
  maps: string
}

const CardDate = ({ title, waktu, tanggal, bulan, tahun, hari, lokasi, maps }: Props) => {
  return (
    <div className="relative flex-1 rounded-lg bg-gradient-to-br from-main-accent2/90 to-main-accent2/70 p-2 font-libreBaskerville sm:grid sm:grid-rows-5 sm:px-10 sm:py-7">
      <h2 className="mb-2 text-center font-lobster text-3xl tracking-wider sm:text-5xl">{title}</h2>

      <div className="grid grid-cols-6 justify-center font-bold">
        <div className="col-span-2 text-right">
          <span>{hari}</span>
        </div>

        <div className="col-span-2 flex w-full flex-col px-4">
          <span className="w-full border-l-[1px] border-r-[1px] border-black text-lg">
            {tanggal}
          </span>
          <span className="text-lg font-normal sm:text-xl">{tahun}</span>
        </div>

        <div className="col-span-2 text-left">
          <span>{bulan}</span>
        </div>
      </div>

      <div className="py-1">
        <p className="font-serif text-sm sm:text-lg">Pukul: {waktu}</p>
      </div>

      <div className="px-4 sm:px-2">
        <p className="text-xs sm:text-sm">{lokasi}</p>
      </div>

      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
        className="mx-auto w-fit"
      >
        <Link
          href={maps}
          target="_blank"
          className="mt-2 inline-flex items-center gap-2 rounded-sm bg-main-accent1 px-2 py-1 font-workSans text-white"
        >
          <span>Lihat Lokasi</span> <FaMapLocationDot className="inline" />
        </Link>
      </motion.div>
    </div>
  )
}
export default CardDate
