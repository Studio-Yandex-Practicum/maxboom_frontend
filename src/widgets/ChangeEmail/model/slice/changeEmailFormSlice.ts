import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { getCurrentUser } from '@/features/login/model/services/getCurrentUser/getCurrentUser'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IChangeEmailForm, IChangeEmailFormSchema } from '../scheme/changeEmailFormSliceScheme'

export const postNewEmail = createAsyncThunk<void, IChangeEmailForm, ThunkConfig<ApiError>>(
  'changeEmailForm/postNewEmail',
  async (setEmailData, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI
    try {
      await extra.api.post(`api/${ApiRoutes.CHANGE_EMAIL}/`, setEmailData)
      dispatch(getCurrentUser())
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: IChangeEmailFormSchema = {
  isLoading: false,
  isSuccess: false,
  error: null
}

export const changeEmailFormSlice = createSlice({
  name: 'changeEmailForm',
  initialState,
  reducers: {
    reset: state => {
      state.error = null
      state.isSuccess = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postNewEmail.pending, state => {
        state.isLoading = true
        state.error = null
        state.isSuccess = false
      })
      .addCase(postNewEmail.fulfilled, state => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(postNewEmail.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: changeEmailFormActions, reducer: changeEmailFormReducer } = changeEmailFormSlice
