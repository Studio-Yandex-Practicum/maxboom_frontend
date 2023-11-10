import React, { FC } from 'react'
import styles from './heading.module.scss'

export enum HeadingType {
  MAIN = 'main',
  MEDIUM = 'medium',
  NORMAL = 'normal',
  SMALL = 'small'
}

type THeadingProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  type?: HeadingType
}

/**
 * @param {string} type - нужно для выбора необходимого типа заголовка
 * @param {string} className - для передачи дополнительных параметров стиля
 */

const Heading: FC<THeadingProps> = ({ children, className, type = HeadingType.MAIN, ...props }) => {
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

  if (type === HeadingType.NORMAL) {
    return headingNormal
  }
  if (type === HeadingType.MEDIUM) {
    return headingMedium
  }
  if (type === HeadingType.SMALL) {
    return headingSmall
  }

  return headingMain
}

export default Heading
