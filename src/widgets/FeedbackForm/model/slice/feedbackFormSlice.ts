import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IFeedbackFormData, IFeedbackFormSchema } from '../scheme/feedbackFormSliceSchema'

export const postFeedback = createAsyncThunk<void, IFeedbackFormData, ThunkConfig<ApiError>>(
  'feedbackForm/postFeedback',
  async (feedback, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.post(`api/${ApiRoutes.STORE_REVIEWS}/`, feedback.values)
      feedback.formikHelpers.resetForm()
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    } finally {
      feedback.formikHelpers.setSubmitting(false)
    }
  }
)

const initialState: IFeedbackFormSchema = {
  isLoading: false,
  isSuccess: false,
  error: null
}

export const feedbackFormSlice = createSlice({
  name: 'feedbackForm',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postFeedback.pending, state => {
        state.isLoading = true
        state.error = null
        state.isSuccess = false
      })
      .addCase(postFeedback.fulfilled, state => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(postFeedback.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: feedbackFormActions, reducer: feedbackFormReducer } = feedbackFormSlice
