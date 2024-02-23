import debounce from 'lodash/debounce'
import { useState, useEffect } from 'react'

const SCREEN_SM = 390
const SCREEN_MD = 768
const SCREEN_LG = 1200
const SCREEN_XL = 1400
const DEDOUNCE_PERIOD = 500

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth)
    }, DEDOUNCE_PERIOD)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL
  }
}
