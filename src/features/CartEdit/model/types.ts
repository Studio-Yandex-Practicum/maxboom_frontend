import { IProductCartList } from '@/shared/model/types/ProductCartListModel'

export interface IProductAmountStateSchema {
  isIncreaseSuccessful: boolean
  isDecreaseSuccessful: boolean
  isRemoveSuccessful: boolean
  isRenewProductAmountSuccessful: boolean
  productList: IProductCartList
  error?: string | string[]
}

export interface IRenewProductAmountRequest {
  product: number
  cart: number
  amount: number
}
