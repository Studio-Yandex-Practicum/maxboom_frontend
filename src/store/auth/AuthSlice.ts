import { createSlice } from '@reduxjs/toolkit'
import { AuthSchema } from '@/store/auth/types'

const initialState: AuthSchema = {
  authData: undefined,
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export const { actions: authActions, reducer: authReducer } = authSlice
