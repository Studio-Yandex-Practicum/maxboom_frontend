import { FC, useState } from 'react'
import Arrows from '../Arrows/Arrows'
import Dots from '../Dots/Dots'
import Img from '@/ui/img'
import { media } from '@/assets/styles/media'
import { sliderData } from '@/mockData/sliderData'
import Link from '@/shared/ui/Link/Link'
import styles from './slider.module.scss'

/**
 * Component Slider
 *
 * @example
 * <Slider />
 */
const Slider: FC = () => {
  const [slide, setSlide] = useState(0)

  const changeSlide = (direction: number = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = sliderData.length - 1
    } else {
      slideNumber = (slide + direction) % sliderData.length
    }

    setSlide(slideNumber)
  }

  const goToSlide = (numberOfSlide: number) => {
    setSlide(numberOfSlide % sliderData.length)
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.arrow__wrap_prev}>
          <Arrows changeSlide={changeSlide} type={'prev'} />
        </div>
        <div className={styles.slider__list} style={{ transform: `translateX(-${slide * 100}%)` }}>
          {sliderData.map((item, index) => {
            return (
              <div key={index} className={styles.slider__item}>
                <Link to={item.href} className={styles.item__link}>
                  <div className={styles.item__content}>
                    <p className={styles.item__info}>{item.title}</p>
                    <h3 className={styles.item__title}>{item.subTitle}</h3>
                    <p className={styles.item__price}>{item.price}</p>
                  </div>
                  <Img srcSet={item.urlImg_m} media={media.middle} src={item.urlImg} alt={item.alt} />
                </Link>
              </div>
            )
          })}
        </div>
        <div className={styles.arrow__wrap_next}>
          <Arrows changeSlide={changeSlide} type={'next'} />
        </div>
        <Dots length={sliderData.length} slideNumber={slide} goToSlide={goToSlide} />
      </div>
    </div>
  )
}

export default Slider
