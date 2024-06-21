import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { IEditAccountFormData, IEditAccountFormSchema } from '../scheme/editAccountFormSliceScheme'

export const postAccount = createAsyncThunk<void, IEditAccountFormData, ThunkConfig<ApiError>>(
  'editAccountForm/postAccount',
  async (editAccount, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.put(`api/${ApiRoutes.USER}/`, editAccount.values)
      editAccount.formikHelpers.resetForm()
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    } finally {
      editAccount.formikHelpers.setSubmitting(false)
    }
  }
)

const initialState: IEditAccountFormSchema = {
  isLoading: false,
  isSuccess: false,
  error: null,
  userprofile: null
}

export const editAccountFormSlice = createSlice({
  name: 'editAccountForm',
  initialState,
  reducers: {
    reset: state => {
      state.error = null
      state.isSuccess = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postAccount.pending, state => {
        state.isLoading = true
        state.error = null
        state.isSuccess = false
      })
      .addCase(postAccount.fulfilled, state => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(postAccount.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: editAccountFormActions, reducer: editAccountFormReducer } = editAccountFormSlice
