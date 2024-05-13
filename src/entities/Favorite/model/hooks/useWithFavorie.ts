import { useEffect, useState } from 'react'

import {
  addToFavoriteProducts,
  isInFavoriteProducts,
  removeFromFavoriteProducts
} from '../functions/functions'
import type { TProduct } from '../types/types'

/**
 * Hook для добавления/удаления, проверки наличия продукта в избранном
 *
 * @param {TProduct} product - продукт
 * @returns {object} - состояние isLiked нахождения продукта в избранном и функцию handleLike для добавления/удаления в/из избранное
 */
export const useWithFavorite = (product: TProduct) => {
  const [isLiked, setIsLiked] = useState<boolean>(isInFavoriteProducts(product))

  useEffect(() => {
    setIsLiked(isInFavoriteProducts(product))
  }, [product])

  const handleLike = () => {
    if (!isLiked) {
      addToFavoriteProducts(product)
      setIsLiked(true)
    } else {
      removeFromFavoriteProducts(product)
      setIsLiked(false)
    }
  }

  return { isLiked, handleLike }
}
