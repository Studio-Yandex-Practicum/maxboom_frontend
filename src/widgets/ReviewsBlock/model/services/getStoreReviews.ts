import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { StoreReviewData } from '../types/types'

export const getStoreReviews = createAsyncThunk<StoreReviewData[], void, ThunkConfig<ApiError>>(
  //void1- выходные данные, void2- входные данные , thunkConfig- тип store
  'store-reviews', // action type, первый аргумент
  async (_, thunkAPI) => {
    // второй аргумент- асинхронная функция , кот вызовет dispatch в компоненте
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(ApiRoutes.STORE_REVIEWS)

      return data.results
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
