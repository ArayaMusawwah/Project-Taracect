'use client'

import { useRef, useState } from 'react'
import About from '../About'
import Hero from '../Hero'
import KalimatPengantar from '../KalimatPengantar'
import Pengantin from '../Pengantin'
import Jadwal from '../Jadwal'

const MainLayout = () => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(true)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  return (
    <main
      className={`h-screen max-h-screen overflow-hidden ${isOverflowHidden ? 'overflow-hidden' : 'overflow-visible'}`}
    >
      <div
        className="relative flex min-h-dvh flex-col items-center justify-center bg-main-bg font-workSans"
        style={{
          background:
            'radial-gradient(circle at 10% 35%, #784a3e 0%, #322c2b 100%), radial-gradient(circle, #784a3e 10%, transparent 100%)'
        }}
      >
        <Hero
          setIsOverflowHidden={setIsOverflowHidden}
          isOverflowHidden={isOverflowHidden}
          aboutRef={aboutRef}
        />
        <About aboutRef={aboutRef} />
        <KalimatPengantar />
        <Pengantin />
        <Jadwal />
      </div>
    </main>
  )
}
export default MainLayout
