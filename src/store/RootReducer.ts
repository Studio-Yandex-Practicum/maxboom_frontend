import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './auth/AuthSlice'

export const rootReducer = combineReducers({
  auth: authSlice
})
