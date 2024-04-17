import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IAddedProduct, ICartEntity, ICartEntitySchema } from '../types/types'

export const getCart = createAsyncThunk<ICartEntity, void, ThunkConfig<ApiError>>(
  'cart/getCart',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.CART_LIST}/`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

export const addToCart = createAsyncThunk<void, IAddedProduct, ThunkConfig<ApiError>>(
  'cart/addToCart',
  async (addedProduct, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.post(`api/${ApiRoutes.CART_LIST}/`, addedProduct)

      thunkAPI.dispatch(getCart())
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: ICartEntitySchema = {
  isLoading: false,
  error: null,
  cart: {
    id: 0,
    products: [],
    user: 0,
    cart_full_price: 0
  }
}

export const cartEntitySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.isLoading = true
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
        })
        .addCase(addToCart.fulfilled, state => {
          state.isLoading = false
        })
        .addCase(addToCart.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        })
  }
})

export const { actions: cartEntityActions, reducer: cartEntityReducer } = cartEntitySlice
