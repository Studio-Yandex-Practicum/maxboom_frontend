import { IProductCartList } from './ProductCartListModel'

export interface ICart {
  id: number
  products: IProductCartList[]
  user: number
  cart_full_price: number
  cart_full_weight: number
}
