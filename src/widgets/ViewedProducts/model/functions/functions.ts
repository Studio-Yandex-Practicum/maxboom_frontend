import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'
import type { IProduct } from '@/shared/model/types/ProductModel'

/**
 * Функция возвращает список просмотренных товаров viewedProducts из текущей сессии session storage.
 */
export const getViewedProductsFromStorage = (): IProduct[] => {
  const viewedProductsStr = sessionStorage.getItem(SESSION_STORAGE.VIEWED) || '[]'
  const viewedProducts: IProduct[] = JSON.parse(viewedProductsStr) as IProduct[]

  return viewedProducts
}
