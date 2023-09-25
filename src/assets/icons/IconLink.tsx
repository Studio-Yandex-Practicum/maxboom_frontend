import React, { FC, useMemo } from 'react'
import { TProps } from '../../models/SvgModel'

/**
 * @param {Array<string> | string} styles - стилизация стрелки
 *
 * @return {svg} - svg изображение
 */
const IconLink: FC<TProps> = props => {
  const { styles } = props
  const style = useMemo(() => {
    return Array.isArray(styles) ? styles.join(' ') : styles
  }, [styles])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 9" id="icon-arrow-link" className={style}>
      <path
        d="M.781 3.774h16.545l-2.74-2.534a.69.69 0 01-.003-1.026.824.824 0 011.105-.003l4.082 3.775a.69.69 0 010 1.028L15.688 8.79a.824.824 0 01-1.105-.003.69.69 0 01.003-1.026l2.74-2.534H.781C.35 5.226 0 4.9 0 4.5c0-.4.35-.726.781-.726z"
        fill="currentColor"></path>
    </svg>
  )
}

export default IconLink
