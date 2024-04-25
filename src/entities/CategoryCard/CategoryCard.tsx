import { FC } from 'react'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import card1 from '../../assets/images/categoryCards/img-categories-01-210x263.webp'
import { TCategory } from '../../models/CategoryModel'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  category: TCategory
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className={styles['category-card']}>
      {category && (
        <>
          {/* <img src={category.image} alt={category.name} className={styles['category-card__img']} />  */}{' '}
          {/* когда будут картинки в бэке, можно будет воспользоваться этой строчкой */}
          <img src={card1} alt={category.name} className={styles['category-card__img']} />{' '}
          {/* временная заглушка */}
          <Paragraph className={styles['category-card__text']}>{category.name}</Paragraph>
        </>
      )}
    </div>
  )
}
