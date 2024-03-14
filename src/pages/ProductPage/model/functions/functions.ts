import { VIEWED_PRODUCTS_LIMIT } from '@/shared/constants/constants'

import { TProduct } from '../types/productTypes'

/**
 * Функция добавления товара в список просмотренных товаров viewedProducts в session storage.
 * @param product: TProduct - текущий товар
 */
export const addToViewedProducts = (product: TProduct): void => {
  const viewedProductsStr = sessionStorage.getItem('viewedProducts') || '[]'
  const viewedProducts: TProduct[] = JSON.parse(viewedProductsStr)

  if (product && product.slug && !includesProduct(product, viewedProducts)) {
    if (viewedProducts.length === VIEWED_PRODUCTS_LIMIT) {
      viewedProducts.shift()
    }
    viewedProducts.push(product)

    sessionStorage.setItem('viewedProducts', JSON.stringify(viewedProducts))
  }

  function includesProduct(product: TProduct, viewedProducts: TProduct[]): boolean {
    return viewedProducts.some(p => p.slug === product.slug)
  }
}
