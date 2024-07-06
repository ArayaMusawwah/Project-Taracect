'use client'

import Wayangs from '../Shared/Wayangs'
import Title from './Title'
import { Suspense, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
          className={`z-50 my-4 h-10 w-44 rounded-sm bg-main-accent2 text-white`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? 'active' : 'visible'}
          variants={{
            active: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: 'linear', delay: 2 }
            },
            visible: { scale: 0, y: 0, transition: { duration: 0.5, ease: 'linear' } }
          }}
        >
          <AnimatePresence>
            {isHovered ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <FaEnvelopeOpen />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <span>Buka Undangan</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <Wayangs isWayang isBoneka />
    </section>
  )
}
export default Hero
