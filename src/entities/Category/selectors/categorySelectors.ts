import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectCategories = (state: RootState) => state.category.categories
export const selectDisplayedCategories = (state: RootState) => state.category.displayedCategories

export const selectCategoryId = (state: RootState) => state.categoryId.categoryId

export const selectCategorySlug = (state: RootState) => state.categorySlug.categorySlug

export const getLoading = (state: RootState) => state.category.isLoading
