import { StateSchema } from '@/app/providers/StoreProvider'

export const getCategoryBranchesSelector = (state: StateSchema) => {
  return state.categoryBranches.categoryInfo
}

export const getCategorySelector = (state: StateSchema) => {
  return state.getCategories.mainCategoriesInfo
}
