import React, { FC, useEffect, useState } from 'react'

import ArrowButton from '../ArrowButton/ArrowButton'

import styles from './Slider.module.scss'

type TProps = {
  className?: string
  children: React.ReactNode[]
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 * @param {React.ReactNode[]} children - принимает массив карточек
 */
const Slider: FC<TProps> = ({ children, className }) => {
  const [slideNumber, setSlideNumber] = useState(0)

  function changeSlide(direction: 'prev' | 'next') {
    let nextSlideNumber
    if (direction === 'next') {
      nextSlideNumber = (slideNumber + 1) % children.length
    } else {
      nextSlideNumber = (slideNumber - 1) % children.length
    }
    if (nextSlideNumber < 0) {
      nextSlideNumber = nextSlideNumber + children.length
    }
    setSlideNumber(nextSlideNumber)
  }

  useEffect(() => {}, [slideNumber])

  return (
    <div className={`${styles.slider} ${className}`}>
      <div className={styles.arrow__wrap_prev}>
        <ArrowButton
          type="left"
          onClick={() => {
            changeSlide('prev')
          }}
        />
      </div>
      <div className={styles.slider__list} style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
        {children}
      </div>
      <div className={styles.arrow__wrap_next}>
        <ArrowButton
          type="right"
          onClick={() => {
            changeSlide('next')
          }}
        />
      </div>
      <div className={styles.slider__pagination}>
        <ul className={styles.dots}>
          {Array.from({ length: children.length }).map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setSlideNumber(index)
                }}
                className={`${styles.dots__item} ${slideNumber === index ? styles.dots__item_active : ''}`}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Slider
