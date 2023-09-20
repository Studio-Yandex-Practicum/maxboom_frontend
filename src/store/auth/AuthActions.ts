import { createAsyncThunk } from '@reduxjs/toolkit'
import { TSignIn } from '../../models/SignInModel'
import { TSignUp } from '../../models/RegistrationModel'

export const signInUser = createAsyncThunk(
  'user/signIn',
  async (body: TSignIn | string, { dispatch, rejectWithValue }) => {
    try {
      //TODO await AuthApi.signin(body)
      return dispatch(getUser())
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const registration = createAsyncThunk('auth/signup', async (body: TSignUp, { dispatch, rejectWithValue }) => {
  try {
    //TODO await AuthApi.signup(body)
    await dispatch(getUser())
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    //TODO await AuthApi.logout()
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const getUser = createAsyncThunk('user/getUser', async (_, { rejectWithValue }) => {
  try {
    //TODO return await UserApi.getUser()
  } catch (e) {
    return rejectWithValue(e)
  }
})
