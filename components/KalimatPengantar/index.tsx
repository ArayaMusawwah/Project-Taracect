import Image from 'next/image'
import Wayangs from '../Shared/Wayangs'
import { MotionDiv, MotionH1, MotionP } from '../Shared/MotionTag'
import { Variants } from 'framer-motion'

const parentVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'linear', staggerChildren: 0.5, staggerDirection: -1 }
  }
}

const childVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'linear' }
  }
}

const KalimatPengantar = () => {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden text-center text-black">
      <MotionDiv
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MotionDiv
          className="h-[82vh] w-full bg-main-accent3 px-8 py-16"
          variants={parentVariants}
          initial={'initial'}
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          <MotionH1
            className="font-playwriteRo text-3xl font-bold sm:mt-4"
            variants={childVariants}
          >
            Ar-Rum 16
          </MotionH1>
          <MotionP
            className="mt-6 text-center font-serif text-xl sm:text-3xl"
            variants={childVariants}
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
            وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ
            يَتَفَكَّرُونَ
          </MotionP>
          <MotionP
            className="mt-6 text-center font-serif text-lg max-sm:text-sm max-sm:leading-snug sm:mt-12"
            variants={childVariants}
          >
            &quot;Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan
            Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia
            Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu
            Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.&quot;
          </MotionP>
        </MotionDiv>
        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={150}
          height={100}
          className="absolute -left-20 -top-4 sm:-left-10 sm:top-4"
        />
        <Image
          src={'/mega-mendung.png'}
          alt=""
          width={150}
          height={100}
          className="absolute -right-20 -top-4 sm:-right-10 sm:top-4"
        />
      </MotionDiv>

      <Wayangs isBoneka />
    </section>
  )
}
export default KalimatPengantar
