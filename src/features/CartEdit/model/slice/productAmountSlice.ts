import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { putDecreaseProductAmount } from '../services/putDecreaseProductAmount'
import { putIncreaseProductAmount } from '../services/putIncreaseProductAmount'
import { IProductAmountStateSchema } from '../types'

const initialState: IProductAmountStateSchema = {
  isIncreaseSuccessful: false,
  productList: {
    amount: 0,
    product: {
      id: 0,
      category: 'string',
      brand: 'string',
      images: [],
      price: '',
      name: '',
      slug: '',
      description: '',
      code: 2147483647,
      wb_urls: ''
    },
    full_price: 0,
    full_weight: 0
  },
  isDecreaseSuccessful: false
}

export const productAmountSlice = createSlice({
  name: 'cart/product/amount',
  initialState,
  reducers: {
    setProductList: (state, { payload }) => {
      state.productList = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(putIncreaseProductAmount.pending, state => {
        state.isIncreaseSuccessful = false
        state.isDecreaseSuccessful = false
      })
      .addCase(putIncreaseProductAmount.fulfilled, (state, { payload }) => {
        state.isIncreaseSuccessful = true
        state.productList = payload
      })
      .addCase(putIncreaseProductAmount.rejected, (state, { payload }) => {
        state.isIncreaseSuccessful = false
        state.error = rejectedPayloadHandle(payload)
      })

      .addCase(putDecreaseProductAmount.pending, state => {
        state.isDecreaseSuccessful = false
      })
      .addCase(putDecreaseProductAmount.fulfilled, (state, { payload }) => {
        state.isDecreaseSuccessful = true
        state.productList = payload
      })
      .addCase(putDecreaseProductAmount.rejected, (state, { payload }) => {
        state.isDecreaseSuccessful = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: productAmountActions, reducer: productAmountReducer } = productAmountSlice
