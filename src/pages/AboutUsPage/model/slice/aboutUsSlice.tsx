import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getAboutUs } from '../services/getAboutUs'
import { IAboutUsSchema } from '../types/types'

const initialState: IAboutUsSchema = {
  isLoading: false,
  result: [],
  error: null
}

export const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAboutUs.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getAboutUs.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.result = payload
      })
      .addCase(getAboutUs.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: aboutUsActions, reducer: aboutUsReducer } = aboutUsSlice
