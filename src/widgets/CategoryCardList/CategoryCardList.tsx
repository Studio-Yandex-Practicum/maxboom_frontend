import type { FC } from 'react'

import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'

import styles from './CategoryCardList.module.scss'

/**
 * Список категорий
 */

export const CategoryCardList: FC = () => {
  return (
    <div className={styles['categoryCardList']}>
      <CategoryCard />
      {/* <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard /> */}
    </div>
  )
}
