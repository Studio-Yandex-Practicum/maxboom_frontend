import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { putDecreaseProductAmount } from '../services/putDecreaseProductAmount'
import { putIncreaseProductAmount } from '../services/putIncreaseProductAmount'
import { putRemoveProduct } from '../services/putRemoveProduct'
import { IProductAmountStateSchema } from '../types'

const initialState: IProductAmountStateSchema = {
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
  isIncreaseSuccessful: false,
  isDecreaseSuccessful: false,
  isRemoveSuccessful: false
}

function resetStatuses(state: IProductAmountStateSchema) {
  state.isIncreaseSuccessful = false
  state.isDecreaseSuccessful = false
  state.isRemoveSuccessful = false
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
        resetStatuses(state)
      })
      .addCase(putIncreaseProductAmount.fulfilled, state => {
        state.isIncreaseSuccessful = true
      })
      .addCase(putIncreaseProductAmount.rejected, (state, { payload }) => {
        state.isIncreaseSuccessful = false
        state.error = rejectedPayloadHandle(payload)
      })

      .addCase(putDecreaseProductAmount.pending, state => {
        resetStatuses(state)
      })
      .addCase(putDecreaseProductAmount.fulfilled, state => {
        state.isDecreaseSuccessful = true
      })
      .addCase(putDecreaseProductAmount.rejected, (state, { payload }) => {
        state.isDecreaseSuccessful = false
        state.error = rejectedPayloadHandle(payload)
      })

      .addCase(putRemoveProduct.pending, state => {
        resetStatuses(state)
      })
      .addCase(putRemoveProduct.fulfilled, state => {
        state.isRemoveSuccessful = true
      })
      .addCase(putRemoveProduct.rejected, state => {
        state.isRemoveSuccessful = false
      })
  }
})

export const { actions: productAmountActions, reducer: productAmountReducer } = productAmountSlice
