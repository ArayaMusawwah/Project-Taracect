'use client'

import { useMediaQuery } from '@react-hook/media-query'
import Wayangs from '../Shared/Wayangs'
import { useEffect, useState } from 'react'

const TheWayang = () => {
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted && <Wayangs isBoneka={isDesktop} />
}
export default TheWayang
