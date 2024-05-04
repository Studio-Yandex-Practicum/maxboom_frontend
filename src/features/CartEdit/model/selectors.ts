import { StateSchema } from '@/app/providers/StoreProvider'

export const isSuccessfulRequest = (state: StateSchema) => {
  return (
    state.productAmount.isIncreaseSuccessful ||
    state.productAmount.isDecreaseSuccessful ||
    state.productAmount.isRemoveSuccessful
  )
}

export const getProductListSelector = (state: StateSchema) => {
  return state.productAmount.productList
}
