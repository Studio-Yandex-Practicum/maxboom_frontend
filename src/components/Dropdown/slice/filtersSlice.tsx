import { createSlice } from '@reduxjs/toolkit'

import type { ICategoryFiltersSchema } from '@/components/Dropdown/types/types'

const initialState: ICategoryFiltersSchema = {
  filterProducts: { name: 'Название А-Я', value: 'name' },
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
