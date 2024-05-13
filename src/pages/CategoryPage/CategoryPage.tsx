import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import CategoryCardList from '@/widgets/CategoryCardList/CategoryCardList'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './CategoryPage.module.scss'

/**
 * Страница всех категорий
 */

export const CategoryPage = () => {
  return (
    <div className={styles['category-page']}>
      <Heading className={styles['category-page__title']}>Все категории</Heading>
      <div className={styles['category-page__nav']}>
        <NavigationLink label={'Главная'} to={'/'} />
        <Paragraph> / Все категории</Paragraph>
      </div>
      <Paragraph className={styles['category-page__subtiitle']}>Категории</Paragraph>
      <CategoryCardList />
    </div>
  )
}
