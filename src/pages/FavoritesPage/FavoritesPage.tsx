import { useEffect, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { TProduct } from '@/entities/Favorite/model/types/types'
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
  const [favoriteProducts, setFavoriteProducts] = useState<TProduct[]>([])

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Избранные товары', href: '' }
  ]

  useEffect(() => {
    setFavoriteProducts(getFavoriteProductsFromStorage())
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const handleStorage = () => {
    console.log('хэндал стораджа')
    setFavoriteProducts(getFavoriteProductsFromStorage())
  }

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
