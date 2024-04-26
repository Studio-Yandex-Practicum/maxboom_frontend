import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { TLogoProps } from '../types/types'

import styles from './LogoSkeleton.module.scss'

/**
 * Компонент LogoSkeleton - заставка, пока не загрузится картинка логотипа
 * @param {string} width - ширина скелетона
 * @param {string} height  - высота скелетона
 */

const LogoSkeleton: FC<TLogoProps> = ({ width, height }) => {
  return <Skeleton className={styles.skeleton} width={width} height={height} />
}

export default LogoSkeleton
