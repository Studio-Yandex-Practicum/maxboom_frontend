import { createSlice } from '@reduxjs/toolkit'

import { getStoreReviews } from '../services/getStoreReviews'
import { StoreReviewsSchema } from '../types/types'

const initialState: StoreReviewsSchema = {
  isLoading: false,
  reviews: []
}

export const reviewsSlice = createSlice({
  name: 'storeReviews',
  initialState,
  reducers: {
    // для обычных  actions, не thunk
  },
  extraReducers: builder => {
    // для thunk actions
    builder
      .addCase(getStoreReviews.pending, state => {
        state.isLoading = true
      })
      .addCase(getStoreReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.reviews = payload
        //state.reviews = payload.test2 // StoreeviewsData с сервера переклыдвается в StoreReviewsSchema (наше Redux хранилище)
      })
      .addCase(getStoreReviews.rejected, state => {
        state.isLoading = false
      })
  }
})

export const { actions: reviewsActions, reducer: storeReviewsReducer } = reviewsSlice
