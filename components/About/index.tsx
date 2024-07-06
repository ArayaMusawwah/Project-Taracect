import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import Image from 'next/image'
import Countdown from '../Hero/Countdown'
import { formatDate } from '@/lib/utils'
import AddToCalendar from './AddToCalendar'
import { MotionDiv, MotionH1, MotionP } from '../Shared/MotionTag'
import { Variants } from 'framer-motion'

const variants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'linear' }
  }
}

const About = () => {
  const date = formatDate(data.resepsi.tanggal)

  return (
    <section
      className="relative flex min-h-lvh w-full items-center justify-center text-center text-white"
      id="about"
    >
      <MotionDiv
        className="absolute top-1/4 z-50"
        variants={variants}
        initial={'initial'}
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <Image src={'/pengantin.png'} alt="pengantin" width={180} height={400} />
      </MotionDiv>

      <MotionDiv
        className="relative z-[60] pt-10"
        variants={variants}
        initial={'initial'}
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <MotionDiv className="mb-4" variants={variants}>
          <MotionH1
            className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl"
            variants={variants}
          >
            {data.mempelai.keduaMempelai}
          </MotionH1>
          <MotionP variants={variants}>Akan melangsungkan resepsi pernikahan dalam: </MotionP>
          <Countdown variants={variants} />
          <MotionP variants={variants} className="my-3 text-2xl font-semibold">
            {date.tanggalFormat}
          </MotionP>
          <AddToCalendar />
        </MotionDiv>
      </MotionDiv>
      <Wayangs isWayang isBoneka />
    </section>
  )
}
export default About
