import { FC } from 'react'

import { CategoryCard } from '@/entities/CategoryCard/CategoryCard'

// import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
// import Link from '@/shared/ui/Link/Link'
// import { cardsAllCategoryListData } from '@/mockData/cardsAllCategoryListData'

import styles from './CategoryCardList.module.scss'

export const CategoryCardList: FC = () => {
  return (
    <div className={styles['categoryCardList']}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  )
}
