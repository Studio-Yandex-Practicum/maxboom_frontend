import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { IRegisterInfo } from '../types'

export const putCreateAccount = createAsyncThunk<void, IRegisterInfo, ThunkConfig<ApiError>>(
  'create-new-account',
  async (registerInfo, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      // const { data } =
      await extra.api.post(
        `api/${ApiRoutes.CREATE_NEW_ACCOUNT}`,
        {
          email: registerInfo.email,
          password: registerInfo.password
        }
        // { withCredentials: true }
      )
      // return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
