import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

export const putRemoveProduct = createAsyncThunk<void, number, ThunkConfig<ApiError>>(
  'cart-remove-product',
  async (productId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.put(
        `api/${ApiRoutes.REMOVE_PRODUCT}`,
        {
          product: productId
        },
        {
          withCredentials: true
        }
      )
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
