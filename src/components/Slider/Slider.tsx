import React, { useState } from 'react'
import styles from './slider.module.scss'
import Arrows from '../Arrows/Arrows'
import Dots from '../Dots/Dots'
import Img from '../../ui/img'
import Link from '../../ui/link'
import { media } from '../../assets/styles/media'
import { sliderData } from '../../mockData/sliderData'

const Slider = () => {
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
        <Arrows changeSlide={changeSlide} />
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
        <Arrows changeSlide={changeSlide} />
        <Dots length={sliderData.length} slideNumber={slide} goToSlide={goToSlide} />
      </div>
    </div>
  )
}

export default Slider
