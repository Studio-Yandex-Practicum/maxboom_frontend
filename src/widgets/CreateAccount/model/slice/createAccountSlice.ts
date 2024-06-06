import { createSlice } from '@reduxjs/toolkit'

import { putCreateAccount } from '../services/putCreateAccount'
import { INewAccountSchema } from '../types'

const initialState: INewAccountSchema = {
  isLoading: false,
  accountInfo: {
    email: '',
    password: ''
  }
}

export const newAccountSlice = createSlice({
  name: 'newAccount',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(putCreateAccount.pending, state => {
        state.isLoading = true
      })
      .addCase(putCreateAccount.fulfilled, state => {
        state.isLoading = false
        // state.accountInfo = payload
      })
      .addCase(putCreateAccount.rejected, state => {
        state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: newAccountActions, reducer: newAccountReducer } = newAccountSlice
