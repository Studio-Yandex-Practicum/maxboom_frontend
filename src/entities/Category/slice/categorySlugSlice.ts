import { createSlice } from '@reduxjs/toolkit'

import type { CategorySlug } from '../types/types'

const initialState: CategorySlug = {
  categorySlug: ''
}

const categorySlugSlice = createSlice({
  name: 'categorySlug',
  initialState,
  reducers: {
    setCategorySlug(state, action) {
      state.categorySlug = action.payload
    }
  }
})

export const { reducer: categorySlugSliceReducer } = categorySlugSlice

export const { setCategorySlug } = categorySlugSlice.actions
