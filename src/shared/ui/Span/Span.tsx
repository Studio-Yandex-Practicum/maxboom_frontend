import React, { FC } from 'react'
import styles from './Span.module.scss'

type TSpanProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */
const Span: FC<TSpanProps> = ({ children, className, ...props }) => {
  return (
    <span className={`${styles.span} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Span
