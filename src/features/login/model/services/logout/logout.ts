import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { getCart } from '@/entities/CartEntity/model/services/getCart'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/constants/localStorage'
import { $localStorageHandler } from '@/shared/libs/helpers/localStorageHandler'

import { loginActions } from '../../slice/loginSlice'

export const logout = createAsyncThunk<void, void, ThunkConfig<ApiError>>(
  'login/logout',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI
    try {
      await extra.api.post(`api/${ApiRoutes.LOGOUT}/`)
      extra.api.delToken && extra.api.delToken()
      $localStorageHandler.removeItem(LOCAL_STORAGE_TOKEN_KEY)

      thunkAPI.dispatch(getCart())
      dispatch(loginActions.userReset())
    } catch (error) {
      if (error) {
        return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.UNKNOWN_SERVER_ERROR))
      }
    }
  }
)
