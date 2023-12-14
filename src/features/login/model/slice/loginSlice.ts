import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { LoginSchema, LoginTokenData } from '../types/types'
import { $api } from '@/shared/api/api'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/constants/localStorage'
import { logout } from '../services/logout/logout'

const initialState: LoginSchema = {
  authData: undefined,
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    },
    setAuthData: (state, action: PayloadAction<LoginTokenData>) => {
      state.token = action.payload.auth_token
      $api.defaults.headers.common.authorization = `token ${action.payload.auth_token}`
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload.auth_token)
    },
    initAuth: state => {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
      if (token) {
        state.token = JSON.stringify(token)
        $api.defaults.headers.common.authorization = `token ${token}`
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, state => {
        state.isLoading = false
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
        delete $api.defaults.headers.common.authorization
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
