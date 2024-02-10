import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_SHOP_NEWS } from '@/shared/constants/constants'

import { getShopNews } from '../services/getShopNews'
import { ShopNewsSchema } from '../types/types'

const initialState: ShopNewsSchema = {
  isLoading: false,
  news: []
}

export const shopNewsSlice = createSlice({
  name: REDUCER_SHOP_NEWS,
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
      .addCase(getShopNews.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: shopNewsActions, reducer: shopNewsReducer } = shopNewsSlice
