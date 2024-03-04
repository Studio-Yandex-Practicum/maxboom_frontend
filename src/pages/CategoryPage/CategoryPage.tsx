import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'

import styles from './CategoryPage.module.scss'

export const CategoryPage = () => {
  return (
    <div className={styles['category-page']}>
      <CategoryCard />
    </div>
  )
}
