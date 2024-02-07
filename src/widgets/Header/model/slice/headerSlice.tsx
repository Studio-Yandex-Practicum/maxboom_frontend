import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCoreBaseHeader } from '../services/getCoreBaseHeader'
import { CoreBaseHeaderSchema } from '../types/types'

const initialState: CoreBaseHeaderSchema = {
  isLoading: false,
  header: {
    main_logo: {
      image: '',
      url: '',
      title: ''
    },
    support: {
      callback: '',
      phone_number: ''
    }
  },
  error: undefined
}

const footerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCoreBaseHeader.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getCoreBaseHeader.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.header = payload
      })
      .addCase(getCoreBaseHeader.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default footerSlice.reducer
