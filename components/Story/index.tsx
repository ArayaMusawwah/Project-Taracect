import { data } from '@/data'
import Wayangs from '../Shared/Wayangs'

const Story = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center text-black">
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-3xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <div className="relative flex h-[50vh] w-full flex-col items-center justify-center gap-2 bg-main-accent3 py-4 sm:h-[60vh]">
          <h1 className="my-4 text-center font-lobster text-4xl tracking-wide">Our Story</h1>
          <p className="font-libreBaskerville">{data.mempelai.story}</p>
        </div>
      </div>

      <Wayangs isBoneka />
    </section>
  )
}
export default Story
