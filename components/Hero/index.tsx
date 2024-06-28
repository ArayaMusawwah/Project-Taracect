'use client'

import { resepsi } from '@/data'
import useMediaQuery from '@/hooks/useMediaQuery'
import { replaceDanToAmpersand } from '@/lib/utils'
import { Snowfall } from 'react-snowfall'
import Wayangs from '../Jawa/Wayangs'

const Hero = ({
  setIsOverflowHidden,
  isOverflowHidden,
  aboutRef
}: {
  setIsOverflowHidden: React.Dispatch<React.SetStateAction<boolean>>
  isOverflowHidden: boolean
  aboutRef: React.RefObject<HTMLDivElement>
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleClick = () => {
    setIsOverflowHidden(false)
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section
      className="relative flex min-h-dvh w-full items-center justify-center text-center text-white"
      id="home"
    >
      <div className="relative z-10 pt-20">
        <div className="mb-8">
          <p>The Wedding Of</p>
          <h1 className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
            {resepsi.nama_mempelai}
          </h1>
          <p>Kepada Bapak/Ibu/Saudara/i Yth: </p>
          <h2 className="mt-4 text-3xl font-semibold">
            {replaceDanToAmpersand('Araya dan Keluarga')}
          </h2>
          <p className="text-lg">Ditempat</p>
        </div>

        <button
          onClick={handleClick}
          className={`my-4 rounded-sm bg-main-accent2 px-4 py-2 text-white transition-all hover:text-main-accent2`}
          style={isOverflowHidden ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}
        >
          Lihat Undangan
        </button>
      </div>

      <Snowfall snowflakeCount={isMobile ? 50 : 150} />
      <Wayangs isWayang />
    </section>
  )
}
export default Hero
