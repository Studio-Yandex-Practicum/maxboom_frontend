import { useEffect, useState } from 'react'

import { getFavoriteProductsFromStorage } from '../functions/functions'
import type { TProduct } from '../types/types'

/**
 * Hook для получения продуктов из избранного
 *
 * @returns {TProduct[]} состояние favoriteProducts с массивом продуктов в избранном
 */
export const useFavorite = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<TProduct[]>([])

  useEffect(() => {
    setFavoriteProducts(getFavoriteProductsFromStorage())
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const handleStorage = () => {
    setFavoriteProducts(getFavoriteProductsFromStorage())
  }

  return favoriteProducts
}
