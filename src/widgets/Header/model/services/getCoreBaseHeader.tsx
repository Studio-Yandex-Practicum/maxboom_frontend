import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { CoreBaseHeaderData } from '../types/types'

/**
 * ассинхронный запрос Api через thunk Redux toolkit
 * <CoreBaseHeaderData> - формат ожидаемого ответа
 * <ThunkConfig> - формат запроса (описан в config StoreProvider)
 * <ApiError> - формат ошибки API запроса (описан в типах API)
 * первый аргумент - thunkConfig ID action type (отображается в dev tools)
 * второй аргумент - асинхронная функция, которая вызовет dispatch в компоненте
 */

export const getCoreBaseHeader = createAsyncThunk<CoreBaseHeaderData, void, ThunkConfig<ApiError>>(
  'core/base_header',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get(`api/${ApiRoutes.CORE_BASE}`)
      return response.data.header as CoreBaseHeaderData
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
