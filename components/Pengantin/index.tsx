import { resepsi } from '@/data'
import Wayangs from '../Shared/Wayangs'

const Pengantin = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="h-screen w-full bg-main-accent3 py-24 sm:py-32">
          <h2 className="font-playwriteRo text-xl sm:font-semibold">Assalamualaikum wr wb</h2>
          <p className="my-3 text-pretty px-4 text-center max-sm:text-sm">
            Dengan izin dan ridhlo Allah Subhanallah Wa Ta&apos;ala, insyaAllah kami akan
            melaksanakan acara pernikahan kami:
          </p>

          <div className="mt-10 flex flex-col px-4">
            <div>
              <h3 className="font-sacramento text-5xl capitalize sm:text-6xl">
                {resepsi.mempelai_perempuan}
              </h3>
              <p>Putri dari</p>
              <p className="capitalize">{resepsi.ortu_perempuan}</p>
            </div>

            <div className="mx-auto my-5 flex w-96 max-w-[150px] items-center space-x-4">
              <span className="bg block h-[2px] w-full bg-black" />
              <span className="font-sacramento text-5xl">&amp;</span>
              <span className="bg block h-[2px] w-full bg-black" />
            </div>

            <div>
              <h3 className="font-sacramento text-5xl capitalize sm:text-6xl">
                {resepsi.mempelai_laki}
              </h3>
              <p>Putra dari</p>
              <p className="capitalize">{resepsi.ortu_laki}</p>
            </div>
          </div>
        </div>
      </div>
      <Wayangs />
    </section>
  )
}
export default Pengantin
