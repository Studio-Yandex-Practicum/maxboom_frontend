import { FAVORITE_PRODUCTS_LIMIT } from '@/shared/constants/constants'
import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'
import { IProduct } from '@/shared/model/types/ProductModel'

/**
 * Ф-я проверяет наличие продукта в массив избранных продуктов в session storage
 * @param {IProduct} product продукт
 * @return {boolean} true/false в зависимости от нахождения в избранном
 */
export const isInFavoriteProducts = (product: IProduct): boolean => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: IProduct[] = JSON.parse(favoriteProductsStr) as IProduct[]

  if (product && product.slug && includesProduct(product, favoriteProducts)) {
    return true
  }

  return false
}

/**
 * Ф-я добавляет продукт в массив избранных продуктов в session storage
 * @param {IProduct} product продукт
 */
export const addToFavoriteProducts = (product: IProduct): void => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: IProduct[] = JSON.parse(favoriteProductsStr) as IProduct[]

  if (product && product.slug && !includesProduct(product, favoriteProducts)) {
    if (favoriteProducts.length === FAVORITE_PRODUCTS_LIMIT) {
      favoriteProducts.shift()
    }
    favoriteProducts.push(product)

    sessionStorage.setItem(SESSION_STORAGE.FAVORITE, JSON.stringify(favoriteProducts))
    window.dispatchEvent(new Event('storage'))
  }
}

/**
 * Ф-я удаляет продукт из массива избранных продуктов в session storage, если он в нем есть
 * @param {TProduct} product продукт
 */
export const removeFromFavoriteProducts = (product: IProduct): void => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: IProduct[] = JSON.parse(favoriteProductsStr) as IProduct[]

  if (product && product.slug && includesProduct(product, favoriteProducts)) {
    favoriteProducts.splice(indexOfProduct(product, favoriteProducts), 1)

    sessionStorage.setItem(SESSION_STORAGE.FAVORITE, JSON.stringify(favoriteProducts))
    window.dispatchEvent(new Event('storage'))
  }
}

function includesProduct(product: IProduct, favoriteProducts: IProduct[]): boolean {
  return favoriteProducts.some(p => p.slug === product.slug)
}

function indexOfProduct(product: IProduct, favoriteProducts: IProduct[]): number {
  return favoriteProducts.findIndex(p => p.slug === product.slug)
}

/**
 * Функция возвращает список избранных товаров favoriteProducts из текущей сессии session storage.
 *
 * @return {IProduct[]} - массив продуктов в избранном
 */
export const getFavoriteProductsFromStorage = (): IProduct[] => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: IProduct[] = JSON.parse(favoriteProductsStr) as IProduct[]

  return favoriteProducts
}
