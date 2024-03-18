import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'

import { TProduct } from '../types/productTypes'

/**
 * Функция возвращает список просмотренных товаров viewedProducts из текущей сессии session storage.
 */
export const getViewedProductsFromStorage = (): TProduct[] => {
  const viewedProductsStr = sessionStorage.getItem(SESSION_STORAGE.VIEWED) || '[]'
  const viewedProducts: TProduct[] = JSON.parse(viewedProductsStr) as TProduct[]

  return viewedProducts
}
