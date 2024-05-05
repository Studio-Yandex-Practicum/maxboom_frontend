import { createSlice } from '@reduxjs/toolkit'

import type { TNumberOfPageSchema } from '@/components/Pagination/types/types'

const initialState: TNumberOfPageSchema = {
  numberOfPage: 1
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setNumberOfPage(state, action) {
      state.numberOfPage = action.payload
    }
  }
})

export const { reducer: paginationSliceReducer } = paginationSlice

export const { setNumberOfPage } = paginationSlice.actions
