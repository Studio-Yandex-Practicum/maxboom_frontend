import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { ApiError, ApiErrorTypes } from '@/shared/api/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'

export const logout = createAsyncThunk<void, void, ThunkConfig<ApiError>>(
  'login/logout',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.post('token/logout')
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)
