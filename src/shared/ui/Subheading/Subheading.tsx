import React, { FC } from 'react'
import styles from './subheading.module.scss'

type TProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Subheading: FC<TProps> = ({ children, className, ...props }) => {
  return (
    <p className={`${className} ${styles.subtitle}`} {...props}>
      {children}
    </p>
  )
}

export default Subheading
