import Container from '@/components/Shared/Container'
import About from '@/components/About'
import Hero from '@/components/Hero'
import KalimatPengantar from '@/components/KalimatPengantar'
import Pengantin from '@/components/Pengantin'
import Jadwal from '@/components/Jadwal'
import Penutup from '@/components/Penutup'
import Footer from '@/components/Footer'
import Story from '@/components/Story'
import Ucapan from '@/components/Ucapan'

const page = () => {
  return (
    <Container>
      <main
        className="relative flex min-h-dvh flex-col items-center justify-center bg-main-bg font-workSans"
        style={{
          background:
            'radial-gradient(circle at 10% 35%, #784a3e 0%, #322c2b 100%), radial-gradient(circle, #784a3e 90%, transparent 100%)'
        }}
        id="container"
      >
        <Hero />
        <About />
        <KalimatPengantar />
        <Pengantin />
        <Jadwal />
        <Story />
        <Ucapan />

        <Penutup />
      </main>

      <Footer />
    </Container>
  )
}
export default page
