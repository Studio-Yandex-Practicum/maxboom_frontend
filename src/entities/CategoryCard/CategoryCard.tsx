import { FC } from 'react'

import { TCategory } from '@/shared/model/types/CategoryModel'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import card1 from '../../assets/images/categoryCards/placeholder-1200x800.png'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  category: TCategory
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className={styles['category-card']}>
      {category && (
        <>
          <img src={category.image || card1} alt={category.name} className={styles['category-card__img']} />
          <Paragraph className={styles['category-card__text']}>{category.name}</Paragraph>
        </>
      )}
    </div>
  )
}
