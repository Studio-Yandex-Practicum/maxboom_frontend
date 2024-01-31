import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ShopNewsData } from '../types/types'

// export const getStoreReviews = createAsyncThunk<StoreReviewData[], void, ThunkConfig<ApiError>>(
export const getShopNews = createAsyncThunk<ShopNewsData[], void, ThunkConfig<ApiError>>(
  //void1- выходные данные, void2- входные данные , thunkConfig- тип store
  'shop-news', // action type, первый аргумент
  async (_, thunkAPI) => {
    // второй аргумент- асинхронная функция , кот вызовет dispatch в компоненте
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(ApiRoutes.SHOP_NEWS)

      return data.results
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
