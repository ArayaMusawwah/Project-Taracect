import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import Image from 'next/image'
import Countdown from '../Hero/Countdown'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = ({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) => {
  const date = formatDate(data.resepsi.tanggal)

  return (
    <section
      className="relative flex min-h-lvh w-full items-center justify-center text-center text-white"
      id="about"
      ref={aboutRef}
    >
      <Image
        src={'/pengantin.png'}
        alt="pengantin"
        width={180}
        height={400}
        className="absolute top-1/4"
      />
      <div className="relative z-10 pt-10">
        <div className="mb-4">
          <h1 className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
            {data.mempelai.keduaMempelai}
          </h1>
          <p>Akan melangsungkan resepsi pernikahan dalam: </p>
          <Countdown />
          <p className="text-lg">{date.tanggalFormat}</p>
          <motion.div
            className="mt-2 inline-flex items-center space-x-2 rounded-md bg-main-accent2 px-4 py-2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
          >
            <FaCalendarAlt />
            <Link
              title="Add to Calendar"
              data-id="kl22223697"
              href="https://www.addevent.com/event/kl22223697"
              target="_blank"
            >
              Add to Calendar
            </Link>
          </motion.div>
        </div>
      </div>
      <Wayangs isWayang isBoneka />
    </section>
  )
}
export default About
