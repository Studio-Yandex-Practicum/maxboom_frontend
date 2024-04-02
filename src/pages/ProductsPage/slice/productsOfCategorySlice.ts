import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_CATEGORIES_PRODUCTS } from '@/shared/constants/constants'

import { getProducts } from '../services/getProducts'
import { ICategoryProductsSchema } from '../types/types'

const initialState: ICategoryProductsSchema = {
  isLoading: false,
  productsData: {
    category_name: '',
    count: 0,
    next: '',
    previous: '',
    results: []
  }
}

export const categoriesProductsSlice = createSlice({
  name: REDUCER_CATEGORIES_PRODUCTS,
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.productsData = payload
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: categoriesProductsActions, reducer: categoriesProductsReducer } =
  categoriesProductsSlice
