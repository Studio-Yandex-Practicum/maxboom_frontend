import React, { FC } from 'react'
import styles from './heading.module.scss'

type TProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  type?: 'main' | 'medium' | 'normal' | 'small'
}

/**
 * @param {string} type - нужно для выбора необходимого типа заголовка
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Heading: FC<TProps> = ({ children, className, type = 'main', ...props }) => {
  const headingMain = (
    <h1 className={`${className} ${styles.title} ${styles.big}`} {...props}>
      {children}
    </h1>
  )
  const headingMedium = (
    <h2 className={`${className} ${styles.title} ${styles.normal}`} {...props}>
      {children}
    </h2>
  )
  const headingNormal = (
    <h3 className={`${className} ${styles.title} ${styles.normal}`} {...props}>
      {children}
    </h3>
  )
  const headingSmall = (
    <h4 className={`${className} ${styles.title} ${styles.normal}`} {...props}>
      {children}
    </h4>
  )

  if (type === 'normal') {
    return headingNormal
  }
  if (type === 'medium') {
    return headingMedium
  }
  if (type === 'small') {
    return headingSmall
  }

  return headingMain
}

export default Heading
