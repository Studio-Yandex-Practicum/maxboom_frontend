import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { IUser } from '../../types/types'
import { logout } from '../logout/logout'

export const getCurrentUser = createAsyncThunk<IUser, void, ThunkConfig<ApiError>>(
  'login/getCurrentUser',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.USER}/`)
      return data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        dispatch(logout())
      }
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
