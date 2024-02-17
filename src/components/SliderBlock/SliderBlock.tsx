import Slider from '../Slider/Slider'

import styles from './slider-block.module.scss'

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
