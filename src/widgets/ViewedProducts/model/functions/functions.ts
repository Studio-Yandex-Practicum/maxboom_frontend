import { TProduct } from '../types/productTypes'

/**
 * Функция возвращает список просмотренных товаров viewedProducts из текущей сессии session storage.
 */
export const getViewedProductsFromStorage = (): TProduct[] => {
  const viewedProductsStr = sessionStorage.getItem('viewedProducts') || '[]'
  const viewedProducts: TProduct[] = JSON.parse(viewedProductsStr)

  return viewedProducts
}
