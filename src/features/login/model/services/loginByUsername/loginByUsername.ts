import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/constants/localStorage'
import { $localStorageHandler } from '@/shared/libs/helpers/localStorageHandler'

import { LoginAuthData, LoginTokenData } from '../../../model/types/types'
import { getCurrentUser } from '../getCurrentUser/getCurrentUser'

export const loginByUsername = createAsyncThunk<LoginTokenData, LoginAuthData, ThunkConfig<ApiError>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI
    try {
      const { data } = await extra.api.post(`api/${ApiRoutes.LOGIN}/`, authData)

      if (!data || !data.auth_token) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR)

      extra.api.addToken && extra.api.addToken(data.auth_token)
      $localStorageHandler.setItem(LOCAL_STORAGE_TOKEN_KEY, data.auth_token)

      dispatch(getCurrentUser())

      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)
