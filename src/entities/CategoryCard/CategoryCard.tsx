import { type FC } from 'react'

// import FM from '@/assets/images/categoryPage/FM.webp'
import { TCategory } from '@/models/CategoryModel'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CategoryCard.module.scss'

export type Props = {
  card: TCategory
}

/**
 * Карточка категории
 */

export const CategoryCard: FC<Props> = props => {
  const { card } = props
  return (
    <div className={styles['category-card']}>
      <img src={card.image} alt="FM-трансмиттеры" className={styles['category-card__img']} />
      <Paragraph className={styles['category-card__text']}>{card.name || ''}</Paragraph>
    </div>
  )
}
