'use client'

import { Snowfall } from 'react-snowfall'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useActivatorContext } from '@/context/Activator'

const SnowfallContainer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { isActive } = useActivatorContext()

  return (
    !isActive && (
      <div className="fixed inset-0">
        <Snowfall snowflakeCount={isMobile ? 50 : 150} wind={[1, 5]} />
      </div>
    )
  )
}
export default SnowfallContainer
