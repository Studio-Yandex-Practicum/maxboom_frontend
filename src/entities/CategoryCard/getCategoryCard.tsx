import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_СATEGORY } from '@/shared/constants/constants'

import { CategoryInfo } from './types'

export const getCategoryCard = createAsyncThunk<CategoryInfo, number, ThunkConfig<ApiError>>(
  ACTION_GET_СATEGORY,
  async (id: number, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.CATEGORIES}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
