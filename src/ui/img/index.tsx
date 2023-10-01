import React, { FC, ImgHTMLAttributes, SourceHTMLAttributes } from 'react'
import styles from './img.module.scss'

type Props = SourceHTMLAttributes<HTMLSourceElement> & ImgHTMLAttributes<HTMLImageElement>

/**
 * @param {string} srcSet - путь к изображению
 * @param {string} media - breakpoint
 */
const Img: FC<Props> = props => {
  const { srcSet, media, ...rest } = props

  return (
    <picture className={styles.picture}>
      <source srcSet={srcSet} media={media} />
      <img {...rest} />
    </picture>
  )
}

export default Img
