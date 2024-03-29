import { createSlice } from '@reduxjs/toolkit'

import { CategoryId } from '../types/types'

const initialState: CategoryId = {
  categoryId: 0
}

const categoryIdSlice = createSlice({
  name: 'categoryId',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    }
  }
})

export const { reducer: categoryIdSliceReducer } = categoryIdSlice

export const { setCategoryId } = categoryIdSlice.actions
