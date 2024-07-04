'use client'

import Wayangs from '../Shared/Wayangs'
import Title from './Title'
import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { useActivatorContext } from '@/context/Activator'

const Hero = () => {
  const { setIsActive, isActive } = useActivatorContext()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setIsActive(false)
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  return (
    <section
      className="relative flex min-h-dvh w-full items-center justify-center text-center text-white"
      id="home"
    >
      <div className="relative z-[60] pt-14 sm:pt-20">
        <Suspense>
          <Title />
        </Suspense>

        <motion.button
          onClick={handleClick}
          className={`z-50 my-4 h-10 w-44 rounded-sm bg-main-accent2 text-white transition-all`}
          style={isActive ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}
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

      <Wayangs isWayang isBoneka />
    </section>
  )
}
export default Hero
