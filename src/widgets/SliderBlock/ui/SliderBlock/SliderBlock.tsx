import SliderCard from '@/entities/SliderCard/SliderCard'
import SliderInfo from '@/entities/SliderInfo/SliderInfo'
import Slider from '@/features/Slider/Slider'
import { sliderData } from '@/mockData/sliderData'

import styles from './SliderBlock.module.scss'

/**
 * Component SliderBlock
 * Компонент для перелистывания главных картинок на главной странице.
 */

const SliderBlock = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Slider>
            {sliderData.map(item => {
              return (
                <SliderCard
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
        <SliderInfo />
      </div>
    </div>
  )
}

export default SliderBlock
