import { FAVORITE_PRODUCTS_LIMIT } from '@/shared/constants/constants'
import { SESSION_STORAGE } from '@/shared/constants/sessionStorage'

import type { TProduct } from '../types/types'

/**
 * Ф-я проверяет наличие продукта в массив избранных продуктов в session storage
 * @param {TProduct} product продукт
 * @return {boolean} true/false в зависимости от нахождения в избранном
 */
export const isInFavoriteProducts = (product: TProduct): boolean => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

  if (product && product.slug && includesProduct(product, favoriteProducts)) {
    return true
  }

  return false
}

/**
 * Ф-я добавляет продукт в массив избранных продуктов в session storage
 * @param {TProduct} product продукт
 */
export const addToFavoriteProducts = (product: TProduct): void => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

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
export const removeFromFavoriteProducts = (product: TProduct): void => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

  if (product && product.slug && includesProduct(product, favoriteProducts)) {
    favoriteProducts.splice(indexOfProduct(product, favoriteProducts), 1)

    sessionStorage.setItem(SESSION_STORAGE.FAVORITE, JSON.stringify(favoriteProducts))
    window.dispatchEvent(new Event('storage'))
  }
}

function includesProduct(product: TProduct, favoriteProducts: TProduct[]): boolean {
  return favoriteProducts.some(p => p.slug === product.slug)
}

function indexOfProduct(product: TProduct, favoriteProducts: TProduct[]): number {
  return favoriteProducts.findIndex(p => p.slug === product.slug)
}

/**
 * Функция возвращает список избранных товаров favoriteProducts из текущей сессии session storage.
 *
 * @return {TProduct[]} - массив продуктов в избранном
 */
export const getFavoriteProductsFromStorage = (): TProduct[] => {
  const favoriteProductsStr = sessionStorage.getItem(SESSION_STORAGE.FAVORITE) || '[]'
  const favoriteProducts: TProduct[] = JSON.parse(favoriteProductsStr) as TProduct[]

  return favoriteProducts
}
