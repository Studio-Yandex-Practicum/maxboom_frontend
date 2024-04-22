import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { useFavorite } from '@/entities/Favorite/model/hooks/useFavorite'
import { ECardView } from '@/shared/model/types/common'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import { ProductsList } from '@/widgets/ProductsList/ProductsList'

import styles from './FavoritesPage.module.scss'

/**
 * Страница с избранными товарами
 */
const FavoritesPage = () => {
  const favoriteProducts = useFavorite()

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
