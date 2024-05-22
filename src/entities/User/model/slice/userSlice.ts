import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IUser, IUserSchema } from '../types/types'

export const getCurrentUser = createAsyncThunk<IUser, void, ThunkConfig<ApiError>>(
  'cart/getCurrentUser',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.USER}/`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: IUserSchema = {
  isLoading: false,
  error: '',
  user: {
    id: null,
    email: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = ''
        state.user = payload
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
