import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_CATEGORY_BRANCHES } from '@/shared/constants/constants'
import { CategoryInfo } from '@/widgets/CategoryList/types/types'

export const getCategoryBranches = createAsyncThunk<CategoryInfo, string | undefined, ThunkConfig<ApiError>>(
  ACTION_GET_CATEGORY_BRANCHES,
  async (slug, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.CATEGORIES}/${slug}?category_tree=true`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
