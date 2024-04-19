import { useEffect, useState } from 'react'

import { isInCartBySlug } from '../functions/cartHelper'
import { ICartProduct } from '../types/types'

/**
 * Hook для отслеживания есть ли товар в корзине
 *
 * @param {string} slug - slug продукта
 * @param {ICartProduct[]} productsInCart - массив продуктов в корзине
 * @returns boolean - возвращает стейт isInCart со значением true/false
 */
export const useIsProductInCart = (slug: string, productsInCart: ICartProduct[]) => {
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    setIsInCart(isInCartBySlug(slug, productsInCart))
  }, [slug, productsInCart])

  return isInCart
}
