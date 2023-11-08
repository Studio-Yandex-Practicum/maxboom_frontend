import React, { FC } from 'react'
import styles from './headingBig.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const HeadingBig: FC<TProps> = props => {
  return <h1 className={`${props.className} ${styles.title}`}>{props.children}</h1>
}

export default HeadingBig
