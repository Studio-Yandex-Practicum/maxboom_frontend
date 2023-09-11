import React, { FC } from 'react'
import styles from './arrow.module.scss'
import IconArrow from '../../assets/icons/IconArrow'

type Props = {
  changeSlide: (number: number) => void
}

/**
 * @param {function} changeSlide - функция, которая меняет слайды.
 * В качестве аргумента принимает либо 1(перемотка вправо) либо (-1)(перемотка влево)
 */
const Arrows: FC<Props> = props => {
  const { changeSlide } = props

  return (
    <div className={styles.slider__button}>
      <button onClick={() => changeSlide(-1)} className={styles.slider__button_prev}>
        {IconArrow({ type: 'prev', styles: styles.slider__swg })}
      </button>
      <button onClick={() => changeSlide(1)} className={styles.slider__button_next}>
        {IconArrow({ type: 'next', styles: styles.slider__swg })}
      </button>
    </div>
  )
}

export default Arrows
