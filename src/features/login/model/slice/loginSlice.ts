import { createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '@/store/auth/types'
import { loginByUsername } from '@/features/login/model/services/loginByUsername/loginByUsername'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

const initialState: LoginSchema = {
  authData: undefined,
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
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
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
