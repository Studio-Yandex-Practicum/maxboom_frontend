import React, { FC } from 'react'
import styles from './Label.module.scss'

type TLabelProps = React.HTMLAttributes<HTMLElement> & {
  htmlFor: string
  className?: string
}

/**
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Label: FC<TLabelProps> = ({ htmlFor, children, className, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`} {...props}>
      {children}
    </label>
  )
}

export default Label
