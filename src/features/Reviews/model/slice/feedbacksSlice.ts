import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import type { IAverageMark, IFeedbackSchema, IGetFeedbackResponse } from '../types/types'

export const getFirstFeedbacks = createAsyncThunk<IGetFeedbackResponse, void, ThunkConfig<ApiError>>(
  'feedbacks/getFirstFeedbacks',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.STORE_REVIEWS}/?page=${1}`)

      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

export const getNextFeedbacks = createAsyncThunk<IGetFeedbackResponse, void, ThunkConfig<ApiError>>(
  'feedbacks/getNextFeedbacks',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    const state = thunkAPI.getState()
    const next = state.feedbacks.next
    if (next) {
      try {
        const { data } = await extra.api.get(`api/${ApiRoutes.STORE_REVIEWS}/?page=${next}`)

        return data
      } catch (error) {
        return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
      }
    }
  }
)

export const getAverageMark = createAsyncThunk<IAverageMark, void, ThunkConfig<ApiError>>(
  'feedbacks/getAverageMark',
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
  count: 0,
  next: null,
  previous: null,
  feedbacks: [],
  averageMark: {
    delivery_speed_score__avg: 0,
    quality_score__avg: 0,
    price_score__avg: 0,
    average_score__avg: 0
  }
}

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFirstFeedbacks.pending, state => {
        state.isLoading = true
      })
      .addCase(getFirstFeedbacks.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.feedbacks = payload.results
        state.count = payload.count
        state.previous = payload.previous ? Number(payload.previous.split('page=')[1]) : null
        state.next = payload.next ? Number(payload.next.split('page=')[1]) : null
      })
      .addCase(getFirstFeedbacks.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      }),
      builder
        .addCase(getNextFeedbacks.pending, state => {
          state.isLoading = true
        })
        .addCase(getNextFeedbacks.fulfilled, (state, { payload }) => {
          state.isLoading = false
          state.feedbacks = [...state.feedbacks, ...payload.results]
          state.count = payload.count
          state.previous = payload.previous ? Number(payload.previous.split('page=')[1]) : null
          state.next = payload.next ? Number(payload.next.split('page=')[1]) : null
        })
        .addCase(getNextFeedbacks.rejected, (state, { payload }) => {
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

export const { actions: feedbacksActions, reducer: feedbacksReducer } = feedbacksSlice
