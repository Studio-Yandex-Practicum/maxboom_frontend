import React, { FC, PropsWithChildren } from 'react'
import styles from './wrapper.module.scss'

const WrapperForMainContent: FC<PropsWithChildren> = props => {
  const { children } = props
  return <div className={styles.wrapper}>{children}</div>
}

export default WrapperForMainContent
