import React, { FC } from 'react'
import styles from './headingNormal.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const HeadingNormal: FC<TProps> = props => {
  return <h4 className={`${props.className} ${styles.title}`}>{props.children}</h4>
}

export default HeadingNormal
