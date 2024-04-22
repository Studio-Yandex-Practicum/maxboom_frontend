import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import { isInCartBySlug } from '../functions/cartHelper'
import { addToCart } from '../slice/cartEntitySlice'

import { useCartSelector } from './sliceHooks'

/**
 * Hook для отслеживания есть ли товар в корзине
 *
 * @param {string} slug - slug продукта
 * @param {number} id - id продукта
 * @returns {object} - {isInCart, handleAddToCart} возвращает стейт isInCart со значением true/false и функцию добавления товара в текущую корзину
 */
export const useProductInCart = (slug: string, id: number) => {
  const cart = useCartSelector()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    setIsInCart(isInCartBySlug(slug, cart.cart.products))
  }, [slug, cart.cart.products])

  const addThisToCart = () => {
    if (id) {
      dispatch(addToCart({ product: id, cart: cart.cart.id, amount: 1 }))
    }
  }

  const handleAddToCart = () => {
    if (!isInCart) {
      addThisToCart()
    } else {
      navigate(Routes.CART)
    }
  }

  return { isInCart, handleAddToCart }
}
