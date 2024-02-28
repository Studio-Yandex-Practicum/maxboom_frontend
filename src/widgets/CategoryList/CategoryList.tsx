import { FC } from 'react'

import { CategoryItem } from '@/features/CategoryItem/CategoryItem'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import styles from './CategoryList.module.scss'

/**
 * Список категорий для страницы товаров.
 * Фиксированная высота настраивается классом .category-list__items
 */
export const CategoryList: FC = () => {
  return (
    <div className={styles['category-list']}>
      <Heading type={HeadingType.NORMAL} className={styles['category-list__title']}>
        Категории
      </Heading>
      <ul className={styles['category-list__items']}>
        {Array.from({ length: 10 }, (_, index) => (
          <CategoryItem key={index} />
        ))}
      </ul>
    </div>
  )
}
