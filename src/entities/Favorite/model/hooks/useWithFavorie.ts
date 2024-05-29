import { useEffect, useState } from 'react'

import { IProduct } from '@/shared/model/types/ProductModel'

import {
  addToFavoriteProducts,
  isInFavoriteProducts,
  removeFromFavoriteProducts
} from '../functions/functions'

/**
 * Hook для добавления/удаления, проверки наличия продукта в избранном
 *
 * @param {IProduct} product - продукт
 * @returns {object} - состояние isLiked нахождения продукта в избранном и функцию handleLike для добавления/удаления в/из избранное
 */
export const useWithFavorite = (product: IProduct) => {
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
