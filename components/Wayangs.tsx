import Image from 'next/image'

const Wayangs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className='absolute top-0 z-10 h-[7rem] w-screen rotate-180 bg-[url("/curtain.png")] bg-cover bg-center bg-repeat-x md:h-[10rem] lg:bg-contain' />
      <div className='absolute bottom-0 z-10 h-[7rem] w-screen bg-[url("/curtain.png")] bg-cover bg-center bg-repeat-x md:h-[10rem] lg:bg-contain' />

      <Image
        src={'/wayang-kiri.png'}
        alt="wayang"
        width={400}
        height={500}
        className="absolute -bottom-4 -left-12 max-md:w-[14rem] md:left-0"
      />
      <Image
        src={'/wayang-kanan.png'}
        alt="wayang"
        width={400}
        height={500}
        className="absolute -right-12 bottom-0 max-md:w-[14rem] md:right-0"
      />

      <Image
        src={'/wayang2.png'}
        alt="wayang"
        width={400}
        height={500}
        className="absolute left-1/2 top-32 -rotate-12"
      />
      <Image
        src={'/wayang2.png'}
        alt="wayang"
        width={400}
        height={500}
        className="absolute right-1/2 top-32 rotate-12"
      />
    </div>
  )
}
export default Wayangs
