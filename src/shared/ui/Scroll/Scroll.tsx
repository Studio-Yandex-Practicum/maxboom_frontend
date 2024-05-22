import React, { FC, MouseEvent, useRef } from 'react'

import styles from './Scroll.module.scss'

export type TProps = {
  className?: string
  children: React.ReactNode
  withManualGrip?: boolean
}

/**
 * Scrollbar
 * @param {string} className - для дополнительных свойств
 * @param {React.ReactNode} children - элементы внутри компонента
 * @param {boolean} withManualGrip - флаг, использовать ли ручной захват содержимого для скроллинга
 */
const Scroll: FC<TProps> = ({ withManualGrip = false, className, children }) => {
  const listRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const isDragging = useRef(false)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    startX.current = e.clientX
    if (listRef && listRef.current) {
      startScrollLeft.current = listRef.current.scrollLeft
    }
    isDragging.current = true
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!isDragging.current) return
    const deltaX = e.clientX - startX.current
    if (listRef.current) {
      listRef.current.scrollLeft = startScrollLeft.current - deltaX
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return withManualGrip ? (
    <div
      className={`${styles.scroll} ${className}`}
      ref={listRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      {children}
    </div>
  ) : (
    <ul className={`${styles.scroll} ${className}`}>{children}</ul>
  )
}

export default Scroll
