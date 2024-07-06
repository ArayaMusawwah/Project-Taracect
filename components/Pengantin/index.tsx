import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import { MotionDiv, MotionH2, MotionP } from '../Shared/MotionTag'
import { Variants } from 'framer-motion'

const parentVariants: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'linear', staggerChildren: 0.5, staggerDirection: -1 }
  }
}

const childVariants: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'linear' }
  }
}

const Pengantin = () => {
  return (
    <section className="relative flex min-h-screen w-full items-start justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="h-[83vh] w-full bg-main-accent3 py-24 sm:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: 'linear', delay: 1 }
            }}
            viewport={{ once: true }}
          >
            <MotionH2
              className="font-playwriteRo text-xl sm:font-semibold"
              variants={childVariants}
              initial={'initial'}
              whileInView={'animate'}
              viewport={{ once: true }}
            >
              Assalamualaikum wr wb
            </MotionH2>
            <MotionP
              className="my-3 text-pretty px-4 text-center max-sm:text-sm"
              variants={childVariants}
              initial={'initial'}
              whileInView={'animate'}
              viewport={{ once: true }}
            >
              Dengan izin dan ridhlo Allah Subhanallah Wa Ta&apos;ala, insyaAllah kami akan
              melaksanakan acara pernikahan kami:
            </MotionP>
          </MotionDiv>

          <MotionDiv
            className="mt-10 flex flex-col px-4"
            variants={parentVariants}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{ once: true }}
          >
            <MotionDiv variants={childVariants}>
              <h3 className="font-sacramento text-5xl capitalize sm:text-6xl">
                {data.mempelai.perempuan.nama}
              </h3>
              <p>Putri dari</p>
              <p className="capitalize">{data.mempelai.perempuan.ortu}</p>
            </MotionDiv>

            <MotionDiv
              className="mx-auto my-2 flex w-96 max-w-[150px] items-center space-x-4 sm:my-5"
              variants={childVariants}
            >
              <span className="bg block h-[2px] w-full bg-black" />
              <span className="font-sacramento text-5xl">&amp;</span>
              <span className="bg block h-[2px] w-full bg-black" />
            </MotionDiv>

            <MotionDiv variants={childVariants}>
              <h3 className="font-sacramento text-5xl capitalize sm:text-6xl">
                {data.mempelai.laki.nama}
              </h3>
              <p>Putra dari</p>
              <p className="capitalize">{data.mempelai.laki.ortu}</p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>

      <Wayangs isBoneka />
    </section>
  )
}
export default Pengantin
