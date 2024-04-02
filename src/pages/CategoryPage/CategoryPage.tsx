// import { Link } from 'react-router-dom'
import { useState } from 'react'

import { ECardView } from '@/shared/model/types/common'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { CategoryCardList } from '@/widgets/CategoryCardList/CategoryCardList'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './CategoryPage.module.scss'
// const API_CATEGORY_CARD = 'https://gealit.ru/api/catalogue/category';

/**
 * Страница всех категорий
 */

export const CategoryPage = () => {
  const [categoryCard, setCategoryCard] = useState<ECardView>(ECardView.LIST)

  const handleCategoryCardList = (view: ECardView) => {
    setCategoryCard(view)
  }

  return (
    <div className={styles['category-page']}>
      <Heading className={styles['category-page__title']}>Все категории</Heading>
      <div className={styles['category-page__nav']}>
        <NavigationLink label={'Главная'} to={'/'} />
        <Paragraph> / Все категории</Paragraph>
      </div>
      <Paragraph className={styles['category-page__subtiitle']}>Категории</Paragraph>
      <CategoryCardList card={handleCategoryCardList} />
      {/* <CategoryCardList /> */}
    </div>
  )
}
