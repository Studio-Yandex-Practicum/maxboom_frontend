import React, { FC } from 'react'
import styles from './headingSmall.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const HeadingSmall: FC<TProps> = props => {
  return <h4 className={`${props.className} ${styles.title}`}>{props.children}</h4>
}

export default HeadingSmall
