import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import CategoryCardList from '@/widgets/CategoryCardList/CategoryCardList'

import styles from './CategoryPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Все категории', href: '' }
]

/**
 * Страница всех категорий
 */
export const CategoryPage = () => {
  return (
    <WrapperForMainContent>
      <div className={styles['category-page']}>
        <Heading className={styles['category-page__title']}>Все категории</Heading>
        <Breadcrumbs links={links} />
        <Subheading className={styles['category-page__subtiitle']}>Категории</Subheading>
        <CategoryCardList />
      </div>
    </WrapperForMainContent>
  )
}
