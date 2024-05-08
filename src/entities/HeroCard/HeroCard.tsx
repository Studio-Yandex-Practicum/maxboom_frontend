import { FC } from 'react'

import { media } from '@/shared/styles/utils/media'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'
import Img from '@/ui/img'

import styles from './HeroCard.module.scss'

export type THeroCardProps = {
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

const HeroCard: FC<THeroCardProps> = ({ alt, title, subTitle, price, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.slider}>
      <Link to={href} className={styles.link}>
        <div className={styles.content}>
          <Subheading>{title}</Subheading>
          <Heading type={HeadingType.NORMAL} className={styles.title}>
            {subTitle}
          </Heading>
          <Paragraph className={styles.price}>{price}</Paragraph>
        </div>
        <Img srcSet={urlImg_m} media={media.middle} src={urlImg} alt={alt} />
      </Link>
    </div>
  )
}

export default HeroCard
