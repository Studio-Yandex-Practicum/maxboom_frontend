import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IChangePassword, IChangePasswordFormSchema } from '../scheme/changePasswordFormSliceScheme'

export const postNewPassword = createAsyncThunk<void, IChangePassword, ThunkConfig<ApiError>>(
  'changePasswordForm/postNewPassword',
  async (setPasswordData, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.post(`api/${ApiRoutes.CHANGE_PASSWORD}/`, setPasswordData)
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: IChangePasswordFormSchema = {
  isLoading: false,
  isSuccess: false,
  error: null
}

export const changePasswordFormSlice = createSlice({
  name: 'changePasswordForm',
  initialState,
  reducers: {
    reset: state => {
      state.error = null
      state.isSuccess = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postNewPassword.pending, state => {
        state.isLoading = true
        state.error = null
        state.isSuccess = false
      })
      .addCase(postNewPassword.fulfilled, state => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(postNewPassword.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: changePasswordFormActions, reducer: changePasswordFormReducer } =
  changePasswordFormSlice
