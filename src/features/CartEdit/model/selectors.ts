import { StateSchema } from '@/app/providers/StoreProvider'

export const putIncreaseProductAmountSelector = (state: StateSchema) => {
  return state.productAmount.isIncreaseSuccessful
}

export const getProductListSelector = (state: StateSchema) => {
  return state.productAmount.productList
}
