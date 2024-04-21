import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { ECardView } from '@/shared/model/types/common'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import { ProductsList } from '@/widgets/ProductsList/ProductsList'

import styles from './FavoritesPage.module.scss'
import { getFavoriteProductsFromStorage } from './model/functions/functions'

/**
 * Страница с избранными товарами
 */
const FavoritesPage = () => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Избранные товары', href: '' }
  ]
  const favoriteProducts = getFavoriteProductsFromStorage()

  return (
    <WrapperForMainContent>
      <div className={styles.pageDescriptor}>
        <Heading>Избранные товары</Heading>
        <Breadcrumbs links={links} />
      </div>
      <section className={styles.favoritePage_list}>
        <ProductsList
          items={{
            category_name: '',
            count: favoriteProducts.length,
            next: '',
            previous: '',
            results: favoriteProducts
          }}
          cardView={ECardView.GRID}
        />
      </section>
    </WrapperForMainContent>
  )
}

export default FavoritesPage
