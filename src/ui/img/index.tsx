import React, { FC, ImgHTMLAttributes, SourceHTMLAttributes } from 'react'
import styles from './img.module.scss'

type Props = SourceHTMLAttributes<HTMLSourceElement> & ImgHTMLAttributes<HTMLImageElement>

const Img: FC<Props> = props => {
  /**
   * @param {string} srcSet - муть к изображению
   * @param {string} media - breakpoint
   */
  const { srcSet, media, ...rest } = props

  return (
    <picture className={styles.picture}>
      <source srcSet={srcSet} media={media} />
      <img {...rest} />
    </picture>
  )
}

export default Img
