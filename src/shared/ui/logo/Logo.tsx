import { type FC } from 'react'

import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import styles from './logo.module.scss'

type TLogoProps = {
  image: string
  width: string
  height: string
}
/**
 * @param {string} image - путь к логотипу на сервере
 * @param {string} width - ширина логотипа
 * @param {string} height  - высота логотипа
 */

const Logo: FC<TLogoProps> = ({ image, width, height }) => {
  return (
    <div className={styles.container}>
      <Link to={Routes.HOME} className={styles.link}>
        <img src={image} alt="Logo" style={{ width, height }} />
      </Link>
    </div>
  )
}

export default Logo
