import { createSlice } from '@reduxjs/toolkit'

import { SORT_NAMES, SORT_VALUES } from '@/shared/constants/constants'
import type { ICategoryFiltersSchema } from '@/shared/ui/Dropdown/types/types'

const initialState: ICategoryFiltersSchema = {
  filterProducts: { name: SORT_NAMES.NAMES_A_YA, value: SORT_VALUES.NAMES_A_YA },
  productQuantityFilter: { name: '15', value: '15' }
}

const categoryFiltersSlice = createSlice({
  name: 'categoryFilters',
  initialState,
  reducers: {
    setFilterProducts(state, action) {
      state.filterProducts = action.payload
    },
    setProductQuantityFilter(state, action) {
      state.productQuantityFilter = action.payload
    }
  }
})

export const { reducer: categoryFiltersSliceReducer } = categoryFiltersSlice

export const { setFilterProducts, setProductQuantityFilter } = categoryFiltersSlice.actions
