import React, { FC } from 'react'
import styles from './paragraph.module.scss'

export type TProps = {
  children: React.ReactNode
  className?: string
}

const Paragraph: FC<TProps> = props => {
  return <p className={`${props.className} ${styles.paragraph}`}>{props.children}</p>
}

export default Paragraph
