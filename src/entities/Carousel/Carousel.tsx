import classNames from 'classnames'
import { type FC, useState, useRef, useEffect } from 'react'

import { ECardView } from '@/shared/model/types/common'
import type { IImage } from '@/shared/model/types/ImageModel'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'

import styles from './Carousel.module.scss'

export interface ICarouselProps {
  photos: IImage[]
  layout: ECardView
}

/**
 * Компонент карусели для карточки товара. Слайды переключаются по hover в разных частях карточки.
 * @param {ECardView} props.layout текущий вид отображения карточки товара;
 * @param {TImgList} props.photos массив фотографий товара, отображаемых в карточке товара;
 */
const Carousel: FC<ICarouselProps> = ({ photos, layout }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleHover = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      const handleMouseMove = (event: MouseEvent) => {
        const containerWidth = container.offsetWidth
        const cursorPosition = event.clientX - container.getBoundingClientRect().left
        const slideWidth = containerWidth / photos.length
        const newIndex = Math.floor(cursorPosition / slideWidth)

        setActiveIndex(newIndex)
      }

      const handleResize = () => {
        setActiveIndex(0)
      }

      container.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [photos])

  return (
    <div
      className={classNames(styles.carouselContainer, {
        [getStylesForCurrentLayout('carouselContainer', styles)[layout]]: layout
      })}
      ref={containerRef}>
      <div className={styles.carousel}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={classNames(styles.slide, {
              [styles.active]: activeIndex === index
            })}
            style={{
              backgroundImage: `url(${photo.image})`,
              transform: `translateX(-${activeIndex * 100}%)`
            }}
            onMouseEnter={() => handleHover(index)}
          />
        ))}
      </div>
      <div className={styles.indicator}>
        {photos.map((_, index) => (
          <div
            key={index}
            className={classNames(styles.dot, {
              [styles.active]: activeIndex === index
            })}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
