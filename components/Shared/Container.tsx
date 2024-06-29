'use client'

import { useRef, useState } from 'react'
import About from '../About'
import Hero from '../Hero'
import KalimatPengantar from '../KalimatPengantar'
import Pengantin from '../Pengantin'
import Jadwal from '../Jadwal'
import Penutup from '../Penutup'
import Footer from '../Footer'

const Container = () => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(true)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`h-screen max-h-screen overflow-hidden bg-black ${isOverflowHidden ? 'overflow-hidden' : 'overflow-visible'}`}
    >
      <main
        className="relative flex min-h-dvh flex-col items-center justify-center bg-main-bg font-workSans"
        style={{
          background:
            'radial-gradient(circle at 10% 35%, #784a3e 0%, #322c2b 100%), radial-gradient(circle, #784a3e 10%, transparent 100%)'
        }}
        id="container"
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

        <Penutup />
      </main>

      <Footer />
    </div>
  )
}
export default Container
