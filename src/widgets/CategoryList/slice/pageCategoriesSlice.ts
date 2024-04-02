import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_CATEGORIES } from '@/shared/constants/constants'
import { getCategories } from '@/widgets/CategoryList/services/getCatergories'
import { IMainCategorySchema } from '@/widgets/CategoryList/types/types'

const initialState: IMainCategorySchema = {
  isLoading: false,
  mainCategoriesInfo: []
}

export const getCategoriesSlice = createSlice({
  name: REDUCER_CATEGORIES,
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.mainCategoriesInfo = payload
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: getCategoriesActions, reducer: getCategoriesReducer } = getCategoriesSlice
