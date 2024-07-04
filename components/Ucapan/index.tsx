import CardContainer from './CardContainer'
import TheWayang from './TheWayang'
import { getAllMessage } from '@/lib/database/message.action'

const Ucapan = async () => {
  const data = await getAllMessage()

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-10 text-center text-black"
      id="ucapan"
    >
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <CardContainer data={data} />
      </div>
      <TheWayang />
    </section>
  )
}
export default Ucapan
