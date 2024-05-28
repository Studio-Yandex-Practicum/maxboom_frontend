import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

import { getCurrentUser } from '../services/getCurrentUser/getCurrentUser'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { logout } from '../services/logout/logout'
import { LoginSchema } from '../types/types'

const initialState: LoginSchema = {
  isLoading: false,
  isAuth: null,
  user: {
    id: null,
    email: null
  }
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
    },
    userReset: state => {
      state.user = {
        id: null,
        email: null
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false
        state.token = action.payload.auth_token
        state.isAuth = !!action.payload.auth_token
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
      .addCase(logout.rejected, state => {
        state.isLoading = false
        state.token = undefined
        state.isAuth = false
      })
    builder
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.getUserError = ''
        state.user = payload
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.getUserError = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
