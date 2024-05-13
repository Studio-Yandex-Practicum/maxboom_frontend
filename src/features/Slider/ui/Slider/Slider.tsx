import { Children, FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react'

import IconLeftArrow from '@/assets/icons/IconLeftArrow.svg'
import IconRightArrow from '@/assets/icons/IconRightArrow.svg'
import { Button } from '@/shared/ui/Button/Button'

import { Direction } from '../../model/types'
import Dot from '../Dot/Dot'

import styles from './Slider.module.scss'

type TProps = {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */
const Slider: FC<PropsWithChildren<TProps>> = ({ children, className, ...props }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [localChildren, setLocalChildren] = useState<Array<ReactNode>>([])

  function changeSlide(direction: Direction) {
    let nextSlideNumber
    if (direction === Direction.NEXT) {
      nextSlideNumber = (slideNumber + 1) % localChildren.length
    } else {
      nextSlideNumber = (slideNumber - 1) % localChildren.length
    }
    if (nextSlideNumber < 0) {
      nextSlideNumber = nextSlideNumber + localChildren.length
    }
    setSlideNumber(nextSlideNumber)
  }

  useEffect(() => {
    setLocalChildren(Children.toArray(children))
  }, [children])

  return (
    <div className={`${styles.slider} ${className}`} {...props}>
      <div className={styles.arrow__wrap_prev}>
        <Button
          className={styles.arrow__button}
          onClick={() => {
            changeSlide(Direction.NEXT)
          }}>
          <IconLeftArrow className={styles.icon} />
        </Button>
      </div>
      <div className={styles.slider__list} style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
        {children}
      </div>
      <div className={styles.arrow__wrap_next}>
        <Button
          className={styles.arrow__button}
          onClick={() => {
            changeSlide(Direction.NEXT)
          }}>
          <IconRightArrow className={styles.icon} />
        </Button>
      </div>
      <div className={styles.slider__pagination}>
        <ul className={styles.dots}>
          {localChildren.map((item, index) => (
            <Dot
              key={index}
              isActive={slideNumber === index}
              onClick={() => {
                setSlideNumber(index)
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider
