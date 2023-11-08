import React, { FC } from 'react'
import styles from './headingMedium.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const HeadingMedium: FC<TProps> = props => {
  return <h2 className={`${props.className} ${styles.title}`}>{props.children}</h2>
}

export default HeadingMedium
