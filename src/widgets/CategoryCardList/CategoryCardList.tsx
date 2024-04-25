import { FC } from 'react'
import { useSelector } from 'react-redux'

import { selectCategories } from '@/entities/Category/selectors/categorySelectors'
import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'

import styles from './CategoryCardList.module.scss'

/**
 * Список категорий
 */

const CategoryCardList: FC = () => {
  const categories = useSelector(selectCategories)

  return (
    <div className={styles.categoryCardList}>
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryCardList
