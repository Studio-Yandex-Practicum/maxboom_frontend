import type { ICartProduct } from '../types/types'

/**
 * Функция проверки наличия товара в корзине
 *
 * @param {string} slug Slug товара
 * @param {ICartProduct[]} cartProducts Массив товаров в корзине
 * @returns {boolean} true, если товар есть в корзине
 */
export const isInCartBySlug = (slug: string, cartProducts: ICartProduct[]): boolean => {
  if (cartProducts.length === 0) return false

  return cartProducts.some(p => p.product.slug === slug)
}

/**
 * Функция проверки наличия товара в корзине
 *
 * @param {number} id Id товара
 * @param {ICartProduct[]} cartProducts Массив товаров в корзине
 * @returns {boolean} true, если товар есть в корзине
 */
export const isInCartById = (id: number, cartProducts: ICartProduct[]): boolean => {
  if (cartProducts.length === 0) return false

  return cartProducts.some(p => p.product.id === id)
}
