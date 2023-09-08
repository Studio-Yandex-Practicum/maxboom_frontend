import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './InitialState'
import { buildSignInUser } from './extraReducers'

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  },
  extraReducers: builder => {
    buildSignInUser(builder)
  }
})

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
