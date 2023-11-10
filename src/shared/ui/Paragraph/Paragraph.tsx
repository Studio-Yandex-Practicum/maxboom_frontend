import React, { FC } from 'react'
import styles from './paragraph.module.scss'

type TProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Paragraph: FC<TProps> = ({ children, className, ...props }) => {
  return (
    <p className={`${className} ${styles.paragraph}`} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
