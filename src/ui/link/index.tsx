import React, { FC } from 'react'
import { Link as ReactLink, LinkProps } from 'react-router-dom'
import styles from './link.module.scss'

type Props = {
  style?: Array<string> | string
} & LinkProps

/**
 * @param {Array<string> | string} style - стили
 *
 * @return {FC} - возвращает Link
 */
const Link: FC<Props> = props => {
  const { children, style, ...res } = props
  const styled = Array.isArray(style) ? style.join(' ') : style

  return (
    <div>
      <ReactLink className={`${styles.link} ${styled || ''}`} {...res}>
        {children}
      </ReactLink>
    </div>
  )
}

export default Link
