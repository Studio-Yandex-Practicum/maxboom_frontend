import { createSlice } from '@reduxjs/toolkit'
import { getShopNews } from '../services/getShopNews'
import { ShopNewsSchema } from '../types/types'

const initialState: ShopNewsSchema = {
  isLoading: false,
  news: []
}

export const shopNewsSlice = createSlice({
  name: 'shopNews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getShopNews.pending, state => {
        state.isLoading = true
      })
      .addCase(getShopNews.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.news = payload
      })
      .addCase(getShopNews.rejected, state => {
        state.isLoading = false
      })
  }
})

export const { actions: shopNewsActions, reducer: shopNewsReducer } = shopNewsSlice
