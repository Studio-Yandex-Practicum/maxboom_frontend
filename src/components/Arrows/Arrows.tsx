import React, { FC } from 'react'
import styles from './arrow.module.scss'
import IconArrow from '../../assets/icons/IconArrow'

type Props = {
  changeSlide: (number: number) => void
  type: 'prev' | 'next'
}

/**
 * @param {string} type - Тип стрелки: левый или правый
 * @param {function} changeSlide - функция, которая меняет слайды.
 * В качестве аргумента принимает либо 1(перемотка вправо) либо (-1)(перемотка влево)
 */
const Arrows: FC<Props> = props => {
  const { changeSlide, type } = props
  const number = type === 'prev' ? -1 : 1

  return (
    <button onClick={() => changeSlide(number)} className={styles.arrow__button}>
      {IconArrow({ type: type, styles: styles.slider__swg })}
    </button>
  )
}

export default Arrows
