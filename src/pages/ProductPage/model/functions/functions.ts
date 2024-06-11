import { VIEWED_PRODUCTS_LIMIT } from '@/shared/constants/constants'
import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'
import type { IProduct } from '@/shared/model/types/ProductModel'

/**
 * Функция добавления товара в список просмотренных товаров viewedProducts в session storage.
 * @param {IProduct} product текущий товар
 */
export const addToViewedProducts = (product: IProduct): void => {
  const viewedProductsStr = sessionStorage.getItem(SESSION_STORAGE.VIEWED) || '[]'
  const viewedProducts: IProduct[] = JSON.parse(viewedProductsStr) as IProduct[]

  if (product && product.slug && !includesProduct(product, viewedProducts)) {
    if (viewedProducts.length === VIEWED_PRODUCTS_LIMIT) {
      viewedProducts.shift()
    }
    viewedProducts.push(product)

    sessionStorage.setItem(SESSION_STORAGE.VIEWED, JSON.stringify(viewedProducts))
  }
}

function includesProduct(product: IProduct, viewedProducts: IProduct[]): boolean {
  return viewedProducts.some(p => p.slug === product.slug)
}
