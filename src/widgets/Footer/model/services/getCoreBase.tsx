import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { CoreBaseFooterData } from '../types/types'

export const getCoreBase = createAsyncThunk<CoreBaseFooterData, void, ThunkConfig<ApiError>>(
  //void1- выходные данные, void2- входные данные , thunkConfig- тип store
  'core/base', // action type, первый аргумент
  async (_, thunkAPI) => {
    // второй аргумент- асинхронная функция , кот вызовет dispatch в компоненте
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get(`api/${ApiRoutes.CORE_BASE}`)

      return response.data.footer as CoreBaseFooterData
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
