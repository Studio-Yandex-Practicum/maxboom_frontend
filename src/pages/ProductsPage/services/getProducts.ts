import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_PRODUCTS_OF_CATEGORY } from '@/shared/constants/constants'

import { ProductsInfo } from '../types/types'

type Params = {
  categoryId: number
  filterProducts: string
  filterQuantity: string
}
export const getProducts = createAsyncThunk<ProductsInfo, Params, ThunkConfig<ApiError>>(
  ACTION_GET_PRODUCTS_OF_CATEGORY,
  async (params, thunkAPI) => {
    const { categoryId, filterProducts, filterQuantity } = params
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(
        `api/${ApiRoutes.PRODUCT}${
          categoryId > 0 ? `?category=${categoryId}` : ''
        }${filterProducts}${filterQuantity}`
      )
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
