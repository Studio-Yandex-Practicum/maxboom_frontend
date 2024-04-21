import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './FavoritesPage.module.scss'

/**
 * Страница с избранными товарами
 */
const FavoritesPage = () => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Избранные товары', href: '' }
  ]

  return (
    <WrapperForMainContent>
      <div className={styles.pageDescriptor}>
        <Heading>Избранные товары</Heading>
        <Breadcrumbs links={links} />
      </div>
      <Subheading>В разработке</Subheading>
    </WrapperForMainContent>
  )
}

export default FavoritesPage
