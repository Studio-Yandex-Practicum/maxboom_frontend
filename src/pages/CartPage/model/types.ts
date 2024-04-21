import { ICart } from '@/models/CartModel'

export interface ICartSchema {
  isLoading: boolean
  cart: ICart
  error?: string | string[]
}
