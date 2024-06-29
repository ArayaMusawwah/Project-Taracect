'use client'
import { useEffect, useState } from 'react'
import TheCountdown from 'react-countdown'
import { data } from '@/data'

interface rendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const Renderer = ({ days, hours, minutes, seconds, completed }: rendererProps) => {
  if (completed) {
    return <h1>The Time Has Come!</h1>
  } else {
    return (
      <div className="inline-flex space-x-2 font-semibold text-white *:flex *:size-16 *:flex-col *:items-center *:justify-center *:-space-y-2 *:rounded-full *:bg-main-accent2 *:text-sm md:space-x-4 md:*:size-20 md:*:text-lg">
        <div>
          <span>{days}</span>
          <span className="block">Hari</span>
        </div>
        <div>
          <span>{hours}</span>
          <span className="block">Jam</span>
        </div>
        <div>
          <span>{minutes}</span>
          <span className="block">Menit</span>
        </div>
        <div>
          <span>{seconds}</span>
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
      {isClient && <TheCountdown date={Date.parse(data.resepsi.tanggal)} renderer={Renderer} />}
    </div>
  )
}
export default Countdown
