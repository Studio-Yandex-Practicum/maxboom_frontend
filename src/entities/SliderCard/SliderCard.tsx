import { FC } from 'react'

import { media } from '@/shared/styles/utils/media'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'

import styles from './SliderCard.module.scss'

export type TSliderCardProps = {
  urlImg: string
  urlImg_m: string
  alt: string
  title: string
  subTitle: string
  price: string
  href: string
}

/**
 * Entity SliderCard
 * Карточка для SliderBlock на главной странице.
 * @param {string} urlImg - изображение
 * @param {string} urlImg_m - изображение
 * @param {string} alt - название картинки, если картинка не подгрузится
 * @param {string} title - название
 * @param {string} subTitle - название
 * @param {string} price - цена
 * @param {string} href - ссылка
 */

const SliderCard: FC<TSliderCardProps> = ({ alt, title, subTitle, price, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.slider__item}>
      <Link to={href} className={styles.item__link}>
        <div className={styles.item__content}>
          <p className={styles.item__info}>{title}</p>
          <h3 className={styles.item__title}>{subTitle}</h3>
          <p className={styles.item__price}>{price}</p>
        </div>
        <Img srcSet={urlImg_m} media={media.middle} src={urlImg} alt={alt} />
      </Link>
    </div>
  )
}

export default SliderCard
