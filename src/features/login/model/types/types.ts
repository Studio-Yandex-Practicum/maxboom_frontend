import { Nullable } from '@/shared/model/types/common'

export interface LoginAuthData {
  email: string
  password: string
}

export interface IUser {
  id: Nullable<number>
  email: Nullable<string>
}

export interface LoginTokenData {
  auth_token: string
}

export interface LoginSchema {
  authData?: LoginAuthData
  isLoading: boolean
  error?: string | string[]
  getUserError?: string | string[]
  token?: string
  isAuth: Nullable<boolean>
  user?: IUser
}
