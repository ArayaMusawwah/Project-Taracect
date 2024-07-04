import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import Image from 'next/image'
import Countdown from '../Hero/Countdown'
import { formatDate } from '@/lib/utils'
import AddToCalendar from './AddToCalendar'

const About = () => {
  const date = formatDate(data.resepsi.tanggal)

  return (
    <section
      className="relative flex min-h-lvh w-full items-center justify-center text-center text-white"
      id="about"
    >
      <Image
        src={'/pengantin.png'}
        alt="pengantin"
        width={180}
        height={400}
        className="absolute top-1/4"
      />
      <div className="relative z-[60] pt-10">
        <div className="mb-4">
          <h1 className="my-6 font-sacramento text-5xl capitalize tracking-wide md:text-7xl">
            {data.mempelai.keduaMempelai}
          </h1>
          <p>Akan melangsungkan resepsi pernikahan dalam: </p>
          <Countdown />
          <p className="my-3 text-2xl font-semibold">{date.tanggalFormat}</p>
          <AddToCalendar />
        </div>
      </div>
      <Wayangs isWayang isBoneka />
    </section>
  )
}
export default About
