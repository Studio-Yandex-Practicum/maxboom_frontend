import { useEffect, useState } from 'react'

import type { IProduct } from '@/shared/model/types/ProductModel'

import { getFavoriteProductsFromStorage } from '../functions/functions'

/**
 * Hook для получения продуктов из избранного
 *
 * @returns {IProduct[]} состояние favoriteProducts с массивом продуктов в избранном
 */
export const useFavorite = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<IProduct[]>([])

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
