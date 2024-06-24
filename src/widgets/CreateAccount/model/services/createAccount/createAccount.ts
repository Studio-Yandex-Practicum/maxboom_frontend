import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { ICreateAccountResult, TCreateAccountPayload } from '../../types/types'

export const createAccount = createAsyncThunk<
  ICreateAccountResult,
  TCreateAccountPayload,
  ThunkConfig<ApiError>
>('createAccount/createAccount', async (values, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const { data } = await extra.api.post(`api/${ApiRoutes.CREATE_ACCOUNT}/`, values)
    return data
  } catch (error) {
    return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
  }
})
