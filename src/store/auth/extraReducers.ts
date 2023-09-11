import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { ALREADY_LOGIN } from '../../constants/errors'
import { signInUser } from './AuthActions'
import { AuthSlice } from './types'

export const buildSignInUser = (builder: ActionReducerMapBuilder<AuthSlice>) =>
  builder
    .addCase(signInUser.pending, state => {
      state.signInStatus = 'pending'
    })
    .addCase(signInUser.fulfilled, state => {
      state.signInStatus = 'success'
      state.isAuth = true
      state.signInError = null
    })
    .addCase(signInUser.rejected, state => {
      state.signInStatus = 'error'
      //state.signInError = handleError(action.payload)
      if (state.signInError === ALREADY_LOGIN) {
        state.isAuth = true
      }
    })
