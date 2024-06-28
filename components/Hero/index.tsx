'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { Snowfall } from 'react-snowfall'
import Wayangs from '../Jawa/Wayangs'
import Title from './Title'

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
        <Title />

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
