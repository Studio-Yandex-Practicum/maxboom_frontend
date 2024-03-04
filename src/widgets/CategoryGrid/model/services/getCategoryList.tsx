import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { TCategory } from '@/shared/model/types/CategoryModel'

/**
 * ассинхронный запрос Api через thunk Redux toolkit
 * <CatalogListData> - формат ожидаемого ответа
 * <ThunkConfig> - формат запроса (описан в config StoreProvider)
 * <ApiError> - формат ошибки API запроса (описан в типах API)
 * первый аргумент - thunkConfig ID action type (отображается в dev tools)
 * второй аргумент - асинхронная функция, которая вызовет dispatch в компоненте
 */

export const getCategoryList = createAsyncThunk<TCategory, void, ThunkConfig<ApiError>>(
  'catalogue/category',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get(`api/${ApiRoutes.CATEGORIES_ON_MAIN}`)
      return response.data as TCategory
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
