import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectCategories = (state: RootState) => state.category.categories
export const selectDisplayedCategories = (state: RootState) => state.category.displayedCategories
