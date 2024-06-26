import type { IProduct } from './ProductModel'

export interface IProductCartList {
  amount: number
  product: IProduct
  full_price: number
  full_weight: number
}
