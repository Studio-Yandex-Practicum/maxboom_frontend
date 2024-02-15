import React, { FC } from 'react'
import styles from './heading.module.scss'
import classnames from 'classnames'

export enum HeadingType {
  MAIN = 'main',
  MEDIUM = 'medium',
  NORMAL = 'normal',
  SMALL = 'small',
  PRODUCT = 'product'
}

const tags = {
  [HeadingType.MAIN]: 'h1',
  [HeadingType.MEDIUM]: 'h2',
  [HeadingType.NORMAL]: 'h3',
  [HeadingType.SMALL]: 'h4',
  [HeadingType.PRODUCT]: 'h3'
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
  const classes = classnames(styles.title, className, {
    [styles.big]: type === HeadingType.MAIN,
    [styles.medium]: type === HeadingType.MEDIUM,
    [styles.normal]: type === HeadingType.NORMAL,
    [styles.small]: type === HeadingType.SMALL,
    [styles.product]: type === HeadingType.PRODUCT
  })
  const HeadingTag = tags[type] // as keyof JSX.IntrinsicElements

  return React.createElement(HeadingTag, { className: classes, ...props }, children)
}

export default Heading
