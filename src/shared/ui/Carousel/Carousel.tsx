import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { getStylesForCurrentLayout } from '@/components/ProductCard/utils/utils'
import { ECardView } from '@/utils/types'
import styles from './Carousel.module.scss'

export interface CarouselProps {
  photos: string[]
  layout: ECardView
}

/**
 * Компонент карусели для карточки товара. Слайды переключаются по hover в разных частях карточки.
 * @param {ECardView} props.layout - текущий вид отображения карточки товара;
 * @param {string[]} props.photos - массив фотографий товара, отображаемых в карточке товара;
 */
const Carousel: React.FC<CarouselProps> = ({ photos, layout }) => {
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
              backgroundImage: `url(${photo})`,
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
