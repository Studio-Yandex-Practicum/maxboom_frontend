import { FC, useMemo } from 'react'
import type { TProps } from '../../models/SvgModel'

/**
 * @param {Array<string> | string} styles - стилизация иконки
 *
 * @return {svg} - svg изображение
 */
const IconLike: FC<TProps> = props => {
  const { styles } = props
  const style = useMemo(() => {
    return Array.isArray(styles) ? styles.join(' ') : styles
  }, [styles])

  return (
    <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={style}>
      <g clipPath="url(#clip0_110_50)">
        <g clipPath="url(#clip1_110_50)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6579 2.8558C15.7632 1.87159 14.6 1.33475 13.2579 1.33475C12.2737 1.33475 11.3789 1.60317 10.5737 2.22948C10.2158 2.49791 9.76842 2.94527 9.5 3.39264C9.14211 2.94527 8.78421 2.58738 8.42632 2.22948C7.62105 1.60317 6.72632 1.33475 5.74211 1.33475C4.4 1.33475 3.23684 1.87159 2.34211 2.8558C1.44737 3.75054 1 5.09264 1 6.43475C1 7.86633 1.53684 9.20843 2.7 10.64C3.77368 11.8926 5.20526 13.1453 6.90526 14.6663C7.53158 15.1137 8.15789 15.6505 8.87368 16.2769C9.05263 16.4558 9.32105 16.5453 9.5 16.5453C9.76842 16.5453 9.94737 16.4558 10.1263 16.2769C10.8421 15.6505 11.4684 15.1137 12.0947 14.5769C13.7947 13.1453 15.3158 11.8032 16.3 10.5505C17.4632 9.11896 18 7.86633 18 6.34527C18 5.09264 17.5526 3.75054 16.6579 2.8558Z"
            stroke="currentColor"
            strokeWidth="1.78947"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_110_50">
          <rect width="19" height="17" fill="currentColor" transform="translate(0 0.440002)" />
        </clipPath>
        <clipPath id="clip1_110_50">
          <rect width="19" height="17" fill="currentColor" transform="translate(0 0.440002)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconLike
