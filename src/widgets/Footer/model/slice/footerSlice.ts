import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCoreBase } from '../services/getCoreBase'
import { CoreBaseFooterSchema } from '../types/types'

const initialState: CoreBaseFooterSchema = {
  isLoading: false,
  footer: {
    company_info: '',
    disclaimer: '',
    support_work_time: '',
    main_logo: {
      image: '',
      url: '',
      title: ''
    },
    additional_logos: [],
    support: {
      callback: '',
      phone_number: ''
    }
  },
  error: undefined
}

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCoreBase.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getCoreBase.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.footer = payload
      })
      .addCase(getCoreBase.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default footerSlice.reducer
