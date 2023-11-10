import React, { FC } from 'react'
import styles from './paragraph.module.scss'

type TParagraphProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Paragraph: FC<TParagraphProps> = ({ children, className, ...props }) => {
  return (
    <p className={`${className} ${styles.paragraph}`} {...props}>
      {children}
    </p>
  )
}

export default Paragraph
