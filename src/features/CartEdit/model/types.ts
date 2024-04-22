import { IProductCartList } from '@/models/ProductCartListModel'

export interface IProductAmountStateSchema {
  isIncreaseSuccessful: boolean
  productList: IProductCartList
  error?: string | string[]
}
