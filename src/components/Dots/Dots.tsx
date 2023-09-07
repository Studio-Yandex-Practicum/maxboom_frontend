import React, { FC } from 'react'
import styles from './dots.module.scss'

type Props = {
  length: number
  slideNumber: number
  goToSlide: (number: number) => void
}

const Dots: FC<Props> = props => {
  /**
   * @param {number} length - число , соответсвующее количеству слайдов
   * @param {number} sliderNumber - индех слайдера в массиве
   * @param {function} goToSlide - переход на нужный слайд
   */
  const { length, slideNumber, goToSlide } = props

  return (
    <div className={styles.slider__pagination}>
      <ul className={styles.dots}>
        {Array.from({ length: length }).map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dots__item} ${slideNumber === index ? styles.dots__item_active : ''}`}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Dots
