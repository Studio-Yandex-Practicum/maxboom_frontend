import { FC } from 'react'

import ArrowRightNextPage from '@/assets/icons/ArrowRightNextPage.svg'
import { media } from '@/shared/styles/utils/media'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Img from '@/ui/img'

import styles from './BannerCard.module.scss'

export type TBannerCardProps = {
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

const BannerCard: FC<TBannerCardProps> = ({ alt, title, subtitle, href, urlImg, urlImg_m }) => {
  return (
    <div className={styles.slider}>
      <Link to={href} className={styles.link}>
        <div className={styles.content}>
          <Heading type={HeadingType.NORMAL} className={styles.title}>
            {title}
          </Heading>
          <Heading type={HeadingType.NORMAL} className={styles.title}>
            {subtitle}
          </Heading>

          <Button size={ButtonSize.S} theme={ButtonTheme.PRIMARY} className={styles.button}>
            Подробнее
            <ArrowRightNextPage className={styles.icon} />
          </Button>
        </div>
        <Img srcSet={urlImg_m} media={media.middle} src={urlImg} alt={alt} />
      </Link>
    </div>
  )
}

export default BannerCard
