import { FC } from 'react'

import BannerCard from '@/entities/BannerCard/BannerCard'
import Slider from '@/features/Slider/ui/Slider/Slider'
import { bannerData } from '@/mockData/bannerData'

import styles from './BannerBlock.module.scss'

/**
 * Компонент BannerBlock для перелистывания главных картинок на главной странице.
 */

const BannerBlock: FC = () => {
  if (bannerData.length === 0) {
    return null
  }

  return (
    <section className={styles.bannerBlock}>
      <Slider>
        {bannerData?.map(item => {
          return (
            <BannerCard
              key={item.id}
              id={item.id}
              urlImg={item.urlImg}
              urlImg_m={item.urlImg_m}
              alt={item.alt}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
            />
          )
        })}
      </Slider>
    </section>
  )
}
export default BannerBlock
