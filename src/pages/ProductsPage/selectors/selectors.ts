import { StateSchema } from '@/app/providers/StoreProvider'
import { RootState } from '@/app/providers/StoreProvider/config/store'

export const getProductsOfCategorySelector = (state: StateSchema) => {
  return state.categoryProduct.productsData
}

export const getLoading = (state: RootState) => {
  return state.categoryProduct.isLoading
}
