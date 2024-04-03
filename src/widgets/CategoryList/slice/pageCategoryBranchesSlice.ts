import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_CATEGORY_BRANCHES } from '@/shared/constants/constants'
import { getCategoryBranches } from '@/widgets/CategoryList/services/getCategoryBranches'
import { ICategorySchema } from '@/widgets/CategoryList/types/types'

const initialState: ICategorySchema = {
  isLoading: false,
  categoryInfo: {
    id: 0,
    name: '',
    slug: '',
    branches: [],
    root: null,
    is_prohibited: false,
    is_visible_on_main: false,
    image: null
  }
}

export const categoryBranchesSlice = createSlice({
  name: REDUCER_CATEGORY_BRANCHES,
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCategoryBranches.pending, state => {
        state.isLoading = true
      })
      .addCase(getCategoryBranches.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.categoryInfo = payload
      })
      .addCase(getCategoryBranches.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: categoryBranchesActions, reducer: categoryBranchesReducer } = categoryBranchesSlice
