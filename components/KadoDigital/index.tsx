'use client'

import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import Image from 'next/image'
import { useMediaQuery } from '@react-hook/media-query'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import TheWayang from '../Ucapan/TheWayang'
const KadoDigital = () => {
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toaster = (text: string) =>
    toast.success(text, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })

  return (
    <section className="relative flex min-h-lvh w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 sm:max-w-5xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="sm:pt-18 relative h-[82vh] w-full bg-main-accent3 px-4 pt-4 sm:h-[70vh] sm:px-10">
          <h2 className="mb-2 font-lobster text-3xl text-black sm:text-4xl">Kado Digital</h2>
          <p className="text-balance font-libreBaskerville text-xs sm:text-sm">
            Doa restu Anda merupakan karunia terindah bagi kami. Dan jika memberi adalah ungkapan
            tanda kasih, dengan senang hati kami menerima kado secara cashless melalui:
          </p>

          <div className="mx-auto mt-2 items-center justify-center px-6 max-md:flex max-md:flex-col max-md:gap-4 md:mt-8 md:grid md:grid-cols-2">
            {data.kado.rekening.map((rekening, index) => (
              <div key={index} className="">
                <Image
                  src={rekening.gambar}
                  alt={rekening.gambar}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 w-2/3 rounded-lg border-2 border-main-accent3/50 object-center"
                />
                <p className="text-sm font-light">No. Rekening: {rekening.nomor}</p>
                <p className="text-sm font-light">An. {rekening.atasNama}</p>
                <CopyToClipboard
                  text={rekening.nomor}
                  onCopy={() => toaster('Nomor Rekening Tersalin')}
                >
                  <motion.button
                    className="mt-2 rounded-md bg-main-accent1 px-4 py-1 text-sm text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Salin No. Rekening
                  </motion.button>
                </CopyToClipboard>
              </div>
            ))}

            <div className="mx-auto mt-4 text-center sm:mt-8 md:col-span-2 md:w-1/2">
              <h4 className="">Alamat Pengiriman Kado</h4>
              <p className="text-balance text-sm font-light">
                {data.kado.penerima} - {data.kado.nomer}
              </p>
              <p className="text-balance text-sm font-light">{data.kado.alamat}</p>
              <CopyToClipboard text={data.kado.alamat} onCopy={() => toaster('Alamat Tersalin')}>
                <motion.button
                  className="mt-2 rounded-md bg-main-accent1 px-4 py-1 text-sm text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Salin Alamat
                </motion.button>
              </CopyToClipboard>
            </div>
          </div>

          {isMounted && (
            <>
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
            </>
          )}
        </div>
      </div>
      {isMounted && !isDesktop && (
        <>
          <Image
            src={'/newWayang.png'}
            alt="wayang"
            width={160}
            height={300}
            className="absolute -bottom-10 -right-16 z-20 rotate-12 sm:-bottom-14 sm:right-36"
          />
          <Image
            src={'/newWayang.png'}
            alt="wayang"
            width={160}
            height={300}
            className="absolute -bottom-10 -left-16 z-20 -rotate-12 sm:-bottom-14 sm:left-36"
          />
        </>
      )}

      <TheWayang />
    </section>
  )
}
export default KadoDigital
