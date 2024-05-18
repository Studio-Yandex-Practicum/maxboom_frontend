import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { logout } from '../services/logout/logout'
import { LoginSchema } from '../types/types'

const initialState: LoginSchema = {
  isLoading: false,
  isAuth: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    },
    initAuth: (state, { payload }) => {
      state.token = payload
      state.isAuth = !!payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.token = payload.auth_token
        state.isAuth = !!payload.auth_token
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
      .addCase(logout.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.token = undefined
        state.isAuth = false
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
