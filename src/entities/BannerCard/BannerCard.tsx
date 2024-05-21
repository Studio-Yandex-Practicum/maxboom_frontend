import { FC } from 'react'

import ArrowIcon from '@/assets/images/sideBarMenu/IconArrowDown.svg'
import { media } from '@/shared/styles/utils/media'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'

import styles from './BannerCard.module.scss'

export type TBannerCard = {
  id: number
  urlImg: string
  urlImg_m: string
  alt: string
  title: string
  subtitle: string
  href: string
}

/**
 * Entity SliderCard
 * Карточка для SliderBlock на главной странице.
 * @param {string} urlImg - изображение
 * @param {string} urlImg_m - изображение
 * @param {string} alt - название картинки, если картинка не подгрузится
 * @param {string} title - название
 * @param {string} subtitle - название
 * @param {string} href - ссылка
 */

const BannerCard: FC<TBannerCard> = ({ alt, title, subtitle, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.bannerCard}>
      <div className={styles.content}>
        <Heading type={HeadingType.NORMAL} className={styles.title}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </Heading>
        <Link to={href} className={styles.button}>
          Подробнее
          <ArrowIcon className={styles.icon} />
        </Link>
      </div>
      <Img srcSet={urlImg_m} media={media.middle} src={urlImg} alt={alt} className={styles.image} />
    </div>
  )
}

export default BannerCard
