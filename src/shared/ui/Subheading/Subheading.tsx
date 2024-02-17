import React, { FC } from 'react'

import styles from './subheading.module.scss'

type TSubheadingProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Subheading: FC<TSubheadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={`${className} ${styles.subtitle}`} {...props}>
      {children}
    </p>
  )
}

export default Subheading
