import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ACTION_GET_PRODUCTS_OF_CATEGORY } from '@/shared/constants/constants'

import { ProductsInfo } from '../types/types'

// export const getStoreReviews = createAsyncThunk<StoreReviewData[], void, ThunkConfig<ApiError>>(
export const getProducts = createAsyncThunk<ProductsInfo, void, ThunkConfig<ApiError>>(
  //void1- выходные данные, void2- входные данные , thunkConfig- тип store
  ACTION_GET_PRODUCTS_OF_CATEGORY, // action type, первый аргумент
  async (_, thunkAPI) => {
    // второй аргумент- асинхронная функция , кот вызовет dispatch в компоненте
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.PRODUCT}?category=439`)
      //TO DO: доставать id категории по клику
      //const { data } = await extra.api.get(`api/${ApiRoutes.PRODUCT}?category={id}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
