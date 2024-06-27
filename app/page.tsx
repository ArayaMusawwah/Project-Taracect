import Hero from '@/components/Hero'
import Wayangs from '@/components/Wayangs'

const page = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center bg-main-bg font-workSans">
      <Hero />
      <Wayangs />
    </main>
  )
}
export default page
