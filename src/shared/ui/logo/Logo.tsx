import { type FC } from 'react'

import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import styles from './Logo.module.scss'
import { TLogoProps } from './model/types/types'

/**
 * Компонент Logo
 * @param {string} image - путь к логотипу на сервере
 * @param {string} width - ширина логотипа
 * @param {string} height  - высота логотипа
 */

const Logo: FC<TLogoProps> = ({ image, width, height }) => {
  return (
    <Link to={Routes.HOME} className={styles.link}>
      <img src={image} alt="Logo" width={width} height={height} />
    </Link>
  )
}

export default Logo
