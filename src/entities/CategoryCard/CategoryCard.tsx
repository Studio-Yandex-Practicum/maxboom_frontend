import { type FC } from 'react'

import FM from '@/assets/images/categoryPage/FM.webp'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CategoryCard.module.scss'

/**
 * Карточка категории
 */

export const CategoryCard: FC = () => {
  return (
    <div className={styles['category-card']}>
      <img src={FM} alt="FM-трансмиттеры" className={styles['category-card__img']} />
      <Paragraph className={styles['category-card__text']}>FM-трансмиттеры</Paragraph>
    </div>
  )
}
