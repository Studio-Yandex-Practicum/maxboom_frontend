import { RootState } from './types'
import { Category } from './types'

export const selectCategory = (state: RootState, categoryId: string): Category | undefined => {
  return state.categories.find(category => category.id === categoryId)
}
