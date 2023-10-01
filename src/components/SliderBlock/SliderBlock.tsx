import React from 'react'
import styles from './slider-block.module.scss'
import Slider from '../Slider/Slider'

/**
 * Component SliderBlock
 * Обертка для слайдера на главной странице.
 *
 * @example
 * <SliderBlock />
 */
const SliderBlock = () => {
  return (
    <div className={styles.slider}>
      <Slider />
    </div>
  )
}

export default SliderBlock
