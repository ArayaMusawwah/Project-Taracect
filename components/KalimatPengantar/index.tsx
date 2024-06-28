import Image from 'next/image'
import Wayangs from '../Jawa/Wayangs'

const KalimatPengantar = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center text-black">
      {/* TODO: add proper looking good shadow */}
      <div
        className="absolute w-full max-w-sm rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="h-lvh w-full bg-main-accent3 px-8 py-32">
          <h1 className="mt-14 font-playwriteRo text-3xl font-bold">Ar-Rum 16</h1>
          <p className="mt-12 font-serif text-xl sm:text-3xl">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
            وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ
            يَتَفَكَّرُونَ
          </p>
          <p className="mt-10 text-center font-serif max-sm:leading-snug">
            &quot;Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan
            Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia
            Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu
            Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.&quot;
          </p>
          <Image
            src={'/mega-mendung.png'}
            alt=""
            width={150}
            height={100}
            className="absolute -left-8 top-24 sm:left-10 sm:top-32"
          />
          <Image
            src={'/mega-mendung.png'}
            alt=""
            width={150}
            height={100}
            className="absolute -right-8 top-24 sm:right-10 sm:top-32"
          />
        </div>
      </div>

      <Wayangs />
    </section>
  )
}
export default KalimatPengantar
