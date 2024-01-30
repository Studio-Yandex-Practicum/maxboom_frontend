import React, { FC } from 'react'
import styles from './Scroll.module.scss'

export type TProps = {
  className?: string
  children: React.ReactNode
}

/**
 * Scrollbar
 * @param {string} className - для дополнительных свойств
 * @param {React.ReactNode} children - элементы внутри компонента
 */
const Scroll: FC<TProps> = ({ className, children }) => {
  return <div className={`${styles.scroll} ${className}`}>{children}</div>
}

export default Scroll
