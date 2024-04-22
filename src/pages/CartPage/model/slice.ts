import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCartList } from './services'
import { ICartSchema } from './types'

const initialState: ICartSchema = {
  isLoading: false,
  cart: {
    id: -1,
    products: [],
    user: -1,
    cart_full_price: 0,
    cart_full_weight: 0
  }
}

export const cartSlice = createSlice({
  name: 'cart/list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCartList.pending, state => {
        state.isLoading = true
      })
      .addCase(getCartList.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.cart = payload
      })
      .addCase(getCartList.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: cartActions, reducer: cartReducer } = cartSlice
