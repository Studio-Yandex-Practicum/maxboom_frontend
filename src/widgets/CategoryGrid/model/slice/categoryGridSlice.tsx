import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCategoryList } from '../services/getCategoryList'
import { CategoryListSchema } from '../types/types'

const initialState: CategoryListSchema = {
  isLoading: false,
  categoryList: {
    category: []
  },
  error: undefined
}

const categoryGridSlice = createSlice({
  name: 'categoryGrid',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.categoryList = payload
      })
      .addCase(getCategoryList.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default categoryGridSlice.reducer
