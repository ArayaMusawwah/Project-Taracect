import Image from 'next/image'
import Wayangs from '../Shared/Wayangs'
import { data } from '@/data'
import useMediaQuery from '@/hooks/useMediaQuery'

const Penutup = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-3xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="grid h-[50vh] w-full grid-rows-2 gap-2 bg-main-accent3 py-4 sm:h-[60vh]">
          <div className="relative">
            <Image
              src={'/pengantin.png'}
              alt="pengantin"
              width={isMobile ? 140 : 180}
              height={isMobile ? 300 : 400}
              className="absolute left-1/2 z-20 mx-auto -translate-x-1/2"
            />
            <Image
              src={'/wayang2.png'}
              alt=""
              width={500}
              height={500}
              className="absolute -top-10 left-1/2 mx-auto -translate-x-1/2 opacity-20"
            />

            <Image
              src={'/mega-mendung.png'}
              alt=""
              width={isMobile ? 100 : 170}
              height={500}
              className="absolute -left-10 top-0"
            />
            <Image
              src={'/mega-mendung.png'}
              alt=""
              width={isMobile ? 100 : 170}
              height={500}
              className="absolute -right-10 top-20"
            />
          </div>

          <div className="px-2">
            <p className="text-sm font-bold sm:text-base">Kami Yang Berbahagia</p>
            <p className="my-2 font-sacramento text-4xl capitalize sm:font-bold">
              {data.mempelai.keduaMempelai}
            </p>
            <p className="text-sm sm:text-base">
              Atas kehadiran dan doa restunya, kami ucapkan terima kasih yang sebesar-besarnya.
            </p>
            <p className="mt-4 font-playwriteRo text-lg font-bold sm:text-2xl">
              Wassalamu&apos;alaikum Wr Wb
            </p>
          </div>
        </div>
      </div>

      <Wayangs isBoneka />
    </section>
  )
}
export default Penutup
