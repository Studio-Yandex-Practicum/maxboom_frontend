import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCoreBaseFooter } from '../services/getCoreBaseFooter'
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
      name: '',
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
      .addCase(getCoreBaseFooter.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getCoreBaseFooter.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.footer = payload
      })
      .addCase(getCoreBaseFooter.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default footerSlice.reducer
