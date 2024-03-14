import { StateSchema } from '@/app/providers/StoreProvider'

export const getProductsOfCategorySelector = (state: StateSchema) => {
  return state.categoryProduct.productsData
}
