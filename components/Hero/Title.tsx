'use client'

import { data } from '@/data'
import { replaceDanToAmpersand } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { Variants, motion } from 'framer-motion'

const parentVariant: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const childVariant = {
  initial: { opacity: 0, y: -20, scale: 1.3 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'linear' } }
}

const Title = () => {
  const searchParams = useSearchParams()
  const tamu = searchParams.get('to')
  return (
    <motion.div className="mb-8" variants={parentVariant} initial={'initial'} animate={'animate'}>
      <motion.p variants={childVariant}>The Wedding Of</motion.p>
      <motion.h1
        variants={childVariant}
        className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl"
      >
        {data.mempelai.keduaMempelai}
      </motion.h1>
      <motion.p variants={childVariant}>Kepada Bapak/Ibu/Saudara/i Yth: </motion.p>
      <motion.h2 className="mt-4 text-3xl font-semibold capitalize" variants={childVariant}>
        {replaceDanToAmpersand(tamu || 'Tamu Undangan')}
      </motion.h2>
      <motion.p className="text-lg" variants={childVariant}>
        Ditempat
      </motion.p>
    </motion.div>
  )
}
export default Title
