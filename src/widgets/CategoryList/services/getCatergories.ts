import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_CATEGORIES } from '@/shared/constants/constants'
import { MainCategoryInfo } from '@/widgets/CategoryList/types/types'

export const getCategories = createAsyncThunk<MainCategoryInfo[], void, ThunkConfig<ApiError>>(
  ACTION_GET_CATEGORIES,
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.CATEGORIES}?category_tree=true`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
