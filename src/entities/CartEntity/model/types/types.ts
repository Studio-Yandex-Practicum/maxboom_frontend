import { IProduct } from '@/shared/model/types/ProductModel'

export interface ICartEntitySchema {
  isLoading?: boolean
  error?: string | string[] | null
  cart: ICartEntity
}

export interface ICartEntity {
  id: number
  products: ICartProduct[]
  user: number
  cart_full_price: number
}

export interface ICartProduct {
  name: string
  image: 'string'
  price: number
  amount: number
  full_price: number
  product: IProduct
}

export interface IAddedProduct {
  product: number
  cart: number
  amount: number
}
