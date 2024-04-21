import type { TProduct } from '@/entities/Favorite/model/types/types'
import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'

/**
 * Функция возвращает список избранных товаров favoriteProducts из текущей сессии session storage.
 */
export const getFavoriteProductsFromStorage = (): TProduct[] => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

  return favoriteProducts
}
