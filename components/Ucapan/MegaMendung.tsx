import { useMediaQuery } from '@react-hook/media-query'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const MegaMendung = () => {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    isMounted &&
    isMobile && (
      <>
        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={150}
          height={500}
          className="absolute -left-20 top-1/2 z-20"
        />
        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={100}
          height={500}
          className="absolute -right-4 bottom-0 z-20"
        />
      </>
    )
  )
}
export default MegaMendung
