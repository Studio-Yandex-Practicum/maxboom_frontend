import { IProductCartList } from '@/shared/model/types/ProductCartListModel'

export interface IProductAmountStateSchema {
  isIncreaseSuccessful: boolean
  isDecreaseSuccessful: boolean
  productList: IProductCartList
  error?: string | string[]
}
