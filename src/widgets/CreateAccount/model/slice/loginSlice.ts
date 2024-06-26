import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { createAccount } from '../services/createAccount/createAccount'
import { ICreateAccountSchema } from '../types/types'

const initialState: ICreateAccountSchema = {
  isLoading: false,
  user: {
    id: null,
    email: null
  }
}

export const createAccountSlice = createSlice({
  name: 'createAccount',
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(createAccount.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(createAccount.fulfilled, state => {
        state.isLoading = false
      })
      .addCase(createAccount.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: createAccountActions, reducer: createAccountReducer } = createAccountSlice
