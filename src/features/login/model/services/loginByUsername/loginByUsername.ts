import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes } from '@/shared/api/types'
import { LoginAuthData } from '@/features/login/model/types/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { LoginTokenData } from '@/store/auth/types'

export const loginByUsername = createAsyncThunk<LoginTokenData, LoginAuthData, ThunkConfig<ApiError>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.post('token/login', authData)

      if (!response.data) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR)

      // localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      // dispatch(userActions.setAuthData(response.data));

      return response.data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)
