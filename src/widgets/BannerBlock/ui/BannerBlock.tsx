import BannerCard from '@/entities/BannerCard/BannerCard'
import Slider from '@/features/Slider/ui/Slider/Slider'
import { bannerData } from '@/mockData/bannerData'

import styles from './BannerBlock.module.scss'

/**
 * Component BannerBlock
 * Компонент для перелистывания главных картинок на главной странице.
 */

const BannerBlock = () => {
  if (bannerData.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
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
    </div>
  )
}
export default BannerBlock
