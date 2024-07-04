'use client'
import { useActivatorContext } from '@/context/Activator'

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = useActivatorContext()

  return (
    <div
      className={`h-screen max-h-screen overflow-hidden bg-black ${isActive ? 'overflow-hidden' : 'overflow-visible'}`}
    >
      {children}
    </div>
  )
}
export default Container
