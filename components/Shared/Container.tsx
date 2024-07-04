'use client'
import { useActivatorContext } from '@/context/Activator'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Snowfall } from 'react-snowfall'

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = useActivatorContext()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div
      className={`h-screen max-h-screen overflow-hidden bg-black ${isActive ? 'overflow-hidden' : 'overflow-visible'}`}
    >
      {children}

      {!isActive && (
        <div className="fixed inset-0">
          <Snowfall snowflakeCount={isMobile ? 50 : 150} wind={[1, 5]} />
        </div>
      )}
    </div>
  )
}
export default Container
