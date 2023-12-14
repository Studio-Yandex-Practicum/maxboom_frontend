import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes } from '@/shared/api/types'
import { LoginAuthData } from '../../../model/types/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { loginActions } from '@/features/login/model/slice/loginSlice'

export const loginByUsername = createAsyncThunk<void, LoginAuthData, ThunkConfig<ApiError>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI
    try {
      const response = await extra.api.post('token/login', authData)

      if (!response.data || !response.data.auth_token) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR)

      dispatch(loginActions.setAuthData(response.data))
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)
