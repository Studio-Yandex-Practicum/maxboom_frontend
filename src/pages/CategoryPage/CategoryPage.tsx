import { CategoryCardList } from '@/widgets/CategoryCardList/CategoryCardList'
import NavigationLink from '@/widgets/NavigationLink/NavigationLink'

import styles from './CategoryPage.module.scss'

export const CategoryPage = () => {
  return (
    <div className={styles['category-page']}>
      <h2 className={styles['category-page__title']}>Все категории</h2>
      <div className={styles['category-page__nav']}>
        <NavigationLink label={'Главная'} to={'/'} />
        <p> / Все категории</p>
      </div>
      <p className={styles['category-page__subtiitle']}>Категории</p>
      <CategoryCardList />
    </div>
  )
}
