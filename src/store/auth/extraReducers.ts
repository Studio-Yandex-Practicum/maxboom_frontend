import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { signInUser } from './AuthActions'
import { AuthSchema } from './types'

export const buildSignInUser = (builder: ActionReducerMapBuilder<AuthSchema>) =>
  builder
    .addCase(signInUser.pending, () => {})
    .addCase(signInUser.fulfilled, () => {})
    .addCase(signInUser.rejected, () => {})
