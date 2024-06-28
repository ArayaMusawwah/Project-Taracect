'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { Snowfall } from 'react-snowfall'
import Wayangs from '../Shared/Wayangs'
import Title from './Title'
import { Suspense, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaEnvelopeOpen } from 'react-icons/fa'

const Hero = ({
  setIsOverflowHidden,
  isOverflowHidden,
  aboutRef
}: {
  setIsOverflowHidden: React.Dispatch<React.SetStateAction<boolean>>
  isOverflowHidden: boolean
  aboutRef: React.RefObject<HTMLDivElement>
}) => {
  const [isHovered, setIsHovered] = useState(false)
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
      <div className="relative z-10 pt-14 sm:pt-20">
        <Suspense>
          <Title />
        </Suspense>

        <motion.button
          onClick={handleClick}
          className={`my-4 h-10 w-44 rounded-sm bg-main-accent2 text-white transition-all`}
          style={isOverflowHidden ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            key={isHovered ? 'icon' : 'text'}
            className="flex items-center justify-center"
          >
            {isHovered ? <FaEnvelopeOpen /> : 'Buka Undangan'}
          </motion.div>
        </motion.button>
      </div>

      <Snowfall snowflakeCount={isMobile ? 50 : 150} wind={[1, 5]} />
      <Wayangs isWayang />
    </section>
  )
}
export default Hero
