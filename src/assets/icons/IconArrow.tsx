import React, { FC, useMemo } from 'react'

type Props = {
  type: 'prev' | 'next'
  styles?: Array<string> | string
}

/**
 * @param {string} type - Тип стрелки: левый или правый
 * @param {Array<string> | string} styles - стилизация стрелок
 *
 * @return {svg} - svg изображение
 */
const IconArrow: FC<Props> = props => {
  const { type, styles } = props
  const style = useMemo(() => {
    return Array.isArray(styles) ? styles.join(' ') : styles
  }, [styles])

  switch (type) {
    case 'prev':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 16" id="icon-prev" className={style}>
          <path
            d="M.244 7.376L7.062.256a.814.814 0 011.185 0l.502.524a.904.904 0 010 1.238L3.024 7.997l5.731 5.985a.89.89 0 01.245.62.89.89 0 01-.245.618l-.502.524a.815.815 0 01-1.185 0L.244 8.618A.89.89 0 010 7.998a.89.89 0 01.244-.622z"
            fill="currentColor"></path>
        </svg>
      )
    case 'next':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 16" id="icon-next" className={style}>
          <path
            d="M8.756 7.376L1.938.256a.814.814 0 00-1.185 0L.251.78a.904.904 0 000 1.238l5.725 5.979-5.731 5.985a.89.89 0 00-.245.62.89.89 0 00.245.618l.502.524a.815.815 0 001.185 0l6.824-7.126A.89.89 0 009 7.998a.89.89 0 00-.244-.622z"
            fill="currentColor"></path>
        </svg>
      )
    default:
      return <svg></svg>
  }
}

export default IconArrow
