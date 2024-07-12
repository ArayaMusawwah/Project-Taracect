'use client'

import axios from 'axios'
import CardContainer from './CardContainer'
import TheWayang from './TheWayang'
import { useEffect, useState } from 'react'
import { IMessage } from '@/types'
import MegaMendung from './MegaMendung'

const Ucapan = () => {
  const [data, setData] = useState<IMessage[]>([])
  const fetchData = async () => {
    const res = await axios.get(`${process.env.PRODUCTION_URL}/api/messages`)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-10 text-center text-black"
      id="ucapan"
    >
      <div
        className="absolute z-10 w-full max-w-[22rem] rounded-lg bg-main-accent3/50 p-2 sm:max-w-xl"
        style={{ boxShadow: '0 0 7px rgb(228 197 158 / 20)' }}
      >
        <CardContainer data={data} fetchData={fetchData} />
        <MegaMendung />
      </div>
      <TheWayang />
    </section>
  )
}
export default Ucapan
