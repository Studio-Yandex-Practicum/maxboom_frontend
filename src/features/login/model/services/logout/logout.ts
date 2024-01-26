import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/constants/localStorage'
import { $localStorageHandler } from '@/shared/libs/helpers/localStorageHandler'

export const logout = createAsyncThunk<void, void, ThunkConfig<ApiError>>(
  'login/logout',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.post(ApiRoutes.LOGOUT)

      extra.api.delToken()
      $localStorageHandler.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)
