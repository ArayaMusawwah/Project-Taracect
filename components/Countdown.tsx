'use client'
import { useEffect, useState } from 'react'
import TheCountdown from 'react-countdown'
import { resepsi } from '@/data'

interface rendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const Renderer = ({ days, hours, minutes, seconds, completed }: rendererProps) => {
  if (completed) {
    return <h1>asu</h1>
  } else {
    return (
      <div className="inline-flex space-x-2 font-semibold text-black *:flex *:size-16 *:flex-col *:items-center *:justify-center *:rounded-full *:bg-main-accent2 *:text-sm md:space-x-4 md:*:size-20">
        <div>
          {days}
          <span className="block">Hari</span>
        </div>
        <div>
          {hours}
          <span className="block">Jam</span>
        </div>
        <div>
          {minutes}
          <span className="block">Menit</span>
        </div>
        <div>
          {seconds}
          <span className="block">Detik</span>
        </div>
      </div>
    )
  }
}

const Countdown = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="my-4">
      {isClient && <TheCountdown date={Date.parse(resepsi.tanggal_resepsi)} renderer={Renderer} />}
    </div>
  )
}
export default Countdown
