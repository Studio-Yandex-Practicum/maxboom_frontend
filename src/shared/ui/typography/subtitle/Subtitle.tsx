import React, { FC } from 'react'
import styles from './subtitle.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const Subtitle: FC<TProps> = props => {
  return <p className={`${props.className} ${styles.subtitle}`}>{props.children}</p>
}

export default Subtitle
