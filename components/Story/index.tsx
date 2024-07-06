import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'
import Image from 'next/image'
import { MotionDiv, MotionH1, MotionP } from '../Shared/MotionTag'

const variants = {
  hidden: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const parentVariants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'linear', staggerChildren: 0.8 }
  }
}

const Story = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <MotionDiv
          className="absolute -right-20 top-0 z-20"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1.4, ease: 'easeInOut' } }}
          viewport={{ once: true }}
        >
          <Image src={'/mega-mendung.png'} alt="" width={180} height={500} />
        </MotionDiv>
        <MotionDiv
          className="relative flex h-[50vh] w-full flex-col items-center justify-center gap-2 bg-main-accent3 py-4"
          variants={parentVariants}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MotionH1
            className="my-4 text-center font-lobster text-4xl tracking-wide"
            variants={variants}
          >
            Our Story
          </MotionH1>
          <MotionP className="font-libreBaskerville" variants={variants}>
            {data.mempelai.story}
          </MotionP>
        </MotionDiv>
      </div>

      <Wayangs isBoneka />
    </section>
  )
}
export default Story
