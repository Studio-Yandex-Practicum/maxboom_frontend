import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'

import { TProduct } from '../types/types'

/**
 * Функция возвращает список избранных товаров favoriteProducts из текущей сессии session storage.
 */
export const getFavoriteProductsFromStorage = (): TProduct[] => {
  /*   const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

  return favoriteProducts */
  const viewedProductsStr = sessionStorage.getItem(SESSION_STORAGE.VIEWED) || '[]'
  const viewedProducts: TProduct[] = JSON.parse(viewedProductsStr) as TProduct[]

  return viewedProducts
}
