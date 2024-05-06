import { ICart } from '@/shared/model/types/CartModel'

export interface ICartSchema {
  isLoading: boolean
  cart: ICart
  error?: string | string[]
}
