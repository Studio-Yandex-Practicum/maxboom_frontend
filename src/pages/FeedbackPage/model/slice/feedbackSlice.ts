import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { IAverageMark, IFeedback, IFeedbackSchema } from '../types/types'

export const getFeedbacks = createAsyncThunk<IFeedback[], number, ThunkConfig<ApiError>>(
  'feedback/getFeedbacks',
  async (page, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.STORE_REVIEWS}/?page=${page}`)

      return data.results
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

export const getAverageMark = createAsyncThunk<IAverageMark, void, ThunkConfig<ApiError>>(
  'feedback/getAverageMark',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.STORE_REVIEWS}/average-rate/`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: IFeedbackSchema = {
  isLoading: false,
  feedbacks: [],
  averageMark: {
    delivery_speed_score__avg: 0,
    quality_score__avg: 0,
    price_score__avg: 0,
    average_score__avg: 0
  }
}

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeedbacks.pending, state => {
        state.isLoading = true
      })
      .addCase(getFeedbacks.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.feedbacks = payload
      })
      .addCase(getFeedbacks.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      }),
      builder
        .addCase(getAverageMark.pending, state => {
          state.isLoading = true
        })
        .addCase(getAverageMark.fulfilled, (state, { payload }) => {
          state.isLoading = false
          state.averageMark = payload
        })
        .addCase(getAverageMark.rejected, (state, { payload }) => {
          state.isLoading = false
          state.error = rejectedPayloadHandle(payload)
        })
  }
})

export const { actions: feedbackActions, reducer: feedbackReducer } = feedbackSlice
