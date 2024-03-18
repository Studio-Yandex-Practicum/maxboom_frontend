import { VIEWED_PRODUCTS_LIMIT } from '@/shared/constants/constants'
import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'

import { TProduct } from '../types/productTypes'

/**
 * Функция добавления товара в список просмотренных товаров viewedProducts в session storage.
 * @param product: TProduct - текущий товар
 */
export const addToViewedProducts = (product: TProduct): void => {
  const viewedProductsStr = sessionStorage.getItem(SESSION_STORAGE.VIEWED) || '[]'
  const viewedProducts: TProduct[] = JSON.parse(viewedProductsStr) as TProduct[]

  if (product && product.slug && !includesProduct(product, viewedProducts)) {
    if (viewedProducts.length === VIEWED_PRODUCTS_LIMIT) {
      viewedProducts.shift()
    }
    viewedProducts.push(product)

    sessionStorage.setItem(SESSION_STORAGE.VIEWED, JSON.stringify(viewedProducts))
  }
}

function includesProduct(product: TProduct, viewedProducts: TProduct[]): boolean {
  return viewedProducts.some(p => p.slug === product.slug)
}
