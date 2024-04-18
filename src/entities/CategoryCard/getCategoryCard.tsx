import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { SEARCH_CATEGORY } from '@/shared/constants/constants'

import { TCategory } from '../../models/CategoryModel'

export const getCategoryCard = createAsyncThunk<TCategory, string, ThunkConfig<ApiError>>(
  SEARCH_CATEGORY,
  async (name: string, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.CATEGORIES}?category=${name}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
