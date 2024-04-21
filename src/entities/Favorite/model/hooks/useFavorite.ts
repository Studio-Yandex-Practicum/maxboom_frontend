import { useEffect, useState } from 'react'

import { isInFavoriteProducts } from '../functions/functions'
import { TProduct } from '../types/types'

/**
 * Hook для хранения состояния продукта в избранном
 * @param {TProduct} product - продукт
 * @returns {isLiked, setIsLiked} - состояние нахождения продукта в избранном
 */
export const useFavorite = (product: TProduct) => {
  const [isLiked, setIsLiked] = useState<boolean>(isInFavoriteProducts(product))

  useEffect(() => {
    setIsLiked(isInFavoriteProducts(product))
  }, [product])

  return { isLiked, setIsLiked }
}
