import { FC } from 'react'
import styles from './logo.module.scss'
import Link from '@/shared/ui/Link/Link'

type TLogoProps = {
  image: string
  title: string
  url: string
  width: string
  height: string
}
/**
 * @param {string} image - путь к логотипу на сервере
 * @param {string} title - лейбл логотипа (и альт)
 * @param {string} url - путь ссылки по нажатию на логотип
 * @param {string} width - ширина логотипа
 * @param {string} height  - высота логотипа
 */

const Logo: FC<TLogoProps> = ({ image, title, url, width, height }) => {
  return (
    <div className={styles.container}>
      <Link to={url} className={styles.link}>
        <img src={image} title={title} alt={title} style={{ width, height }} />
      </Link>
    </div>
  )
}

export default Logo
