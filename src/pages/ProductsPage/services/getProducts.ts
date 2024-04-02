import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_PRODUCTS_OF_CATEGORY } from '@/shared/constants/constants'

import { ProductsInfo } from '../types/types'

export const getProducts = createAsyncThunk<ProductsInfo, number, ThunkConfig<ApiError>>(
  ACTION_GET_PRODUCTS_OF_CATEGORY,
  async (id: number, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.PRODUCT}${id > 0 ? `?category=${id}` : ''}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
