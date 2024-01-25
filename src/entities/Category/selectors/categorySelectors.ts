import { RootState } from '@/app/providers/SroreProvider/config/store'

export const selectCategories = (state: RootState) => state.category.categories
export const selectDisplayedCategories = (state: RootState) => state.category.displayedCategories
