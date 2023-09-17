import React, { FC } from 'react'
import { Link as ReactLink, LinkProps } from 'react-router-dom'
import styles from './link.module.scss'

type Props = LinkProps

const Link: FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <ReactLink className={styles.link} {...props}>
        {children}
      </ReactLink>
    </div>
  )
}

export default Link
