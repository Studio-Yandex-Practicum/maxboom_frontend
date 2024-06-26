import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { TNews } from '@/pages/NewsItemPage/types/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_NEWS_ITEM } from '@/shared/constants/constants'

export const getNewsItemPage = createAsyncThunk<TNews, string, ThunkConfig<ApiError>>(
  ACTION_GET_NEWS_ITEM,
  async (slug, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.SHOP_NEWS}/${slug}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
