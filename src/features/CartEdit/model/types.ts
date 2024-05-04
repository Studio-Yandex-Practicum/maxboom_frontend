import { IProductCartList } from '@/shared/model/types/ProductCartListModel'

export interface IProductAmountStateSchema {
  isIncreaseSuccessful: boolean
  isDecreaseSuccessful: boolean
  isRemoveSuccessful: boolean
  productList: IProductCartList
  error?: string | string[]
}
