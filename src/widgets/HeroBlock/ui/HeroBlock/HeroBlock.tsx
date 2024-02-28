import HeroCard from '@/entities/HeroCard/HeroCard'
import HeroInfo from '@/entities/HeroInfo/HeroInfo'
import Slider from '@/features/Slider/Slider'
import { heroData } from '@/mockData/heroData'

import styles from './HeroBlock.module.scss'

/**
 * Component SliderBlock
 * Компонент для перелистывания главных картинок на главной странице.
 */

const HeroBlock = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Slider>
            {heroData.map(item => {
              return (
                <HeroCard
                  key={item.id}
                  urlImg={item.urlImg}
                  urlImg_m={item.urlImg_m}
                  alt={item.alt}
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  href={item.href}
                />
              )
            })}
          </Slider>
        </div>
        <HeroInfo />
      </div>
    </div>
  )
}

export default HeroBlock
