import { RootState } from '@/app/providers/StoreProvider/config/store'

export const selectFilterProducts = (state: RootState) => state.categoryFilters.filterProducts

export const selectFilterQuantity = (state: RootState) => state.categoryFilters.productQuantityFilter
