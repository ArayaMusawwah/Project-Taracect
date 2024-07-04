'use client'

import { useActivatorContext } from '@/context/Activator'
import { useRef, useState } from 'react'
import { BsDisc } from 'react-icons/bs'
import { FaRegPauseCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const AudioPlayer = () => {
  const { isActive } = useActivatorContext()
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  const handlePlayPause = () => {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play()
    setIsPlaying(!isPlaying)
  }

  const audioRef = useRef<HTMLAudioElement | null>(null)

  return (
    !isActive && (
      <motion.div
        className="fixed right-10 top-20 z-[9999] cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <audio loop ref={audioRef} autoPlay={!isActive}>
          <source src="/audio/backsound.mp3" type="audio/mpeg" />
        </audio>
        {isPlaying ? (
          <BsDisc className="animate-spin-slow text-5xl text-white" onClick={handlePlayPause} />
        ) : (
          <FaRegPauseCircle className="text-5xl text-white" onClick={handlePlayPause} />
        )}
      </motion.div>
    )
  )
}
export default AudioPlayer
