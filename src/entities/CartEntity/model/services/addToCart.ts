import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IAddedProduct } from '../types/types'

import { getCart } from './getCart'

export const addToCart = createAsyncThunk<void, IAddedProduct, ThunkConfig<ApiError>>(
  'cartEntitie/addToCart',
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
