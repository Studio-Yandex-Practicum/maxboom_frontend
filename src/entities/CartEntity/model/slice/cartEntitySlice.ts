import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { addToCart } from '../services/addToCart'
import { getCart } from '../services/getCart'
import { putDecreaseProductAmount } from '../services/putDecreaseProductAmount'
import { putIncreaseProductAmount } from '../services/putIncreaseProductAmount'
import { putRemoveProduct } from '../services/putRemoveProduct'
import { putRenewProductAmount } from '../services/putRenewProductAmount'
import type { ICartEntitySchema } from '../types/types'

const initialState: ICartEntitySchema = {
  isLoading: false,
  error: null,
  cart: {
    id: 0,
    products: [],
    user: 0,
    cart_full_price: 0,
    cart_full_weight: 0
  }
}

export const cartEntitySlice = createSlice({
  name: 'cartEntitie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.cart = payload
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      }),
      builder
        .addCase(addToCart.pending, state => {
          state.isLoading = true
          state.error = null
        })
        .addCase(addToCart.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(addToCart.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        }),
      builder
        .addCase(putIncreaseProductAmount.pending, state => {
          state.isLoading = true
          state.error = null
        })
        .addCase(putIncreaseProductAmount.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(putIncreaseProductAmount.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        }),
      builder
        .addCase(putDecreaseProductAmount.pending, state => {
          state.isLoading = true
          state.error = null
        })
        .addCase(putDecreaseProductAmount.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(putDecreaseProductAmount.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        }),
      builder
        .addCase(putRenewProductAmount.pending, state => {
          state.isLoading = true
          state.error = null
        })
        .addCase(putRenewProductAmount.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(putRenewProductAmount.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        }),
      builder
        .addCase(putRemoveProduct.pending, state => {
          state.isLoading = true
          state.error = null
        })
        .addCase(putRemoveProduct.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(putRemoveProduct.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        })
  }
})

export const { actions: cartEntityActions, reducer: cartEntityReducer } = cartEntitySlice
