export interface LoginAuthData {
  email: string
  password: string
}

export interface LoginTokenData {
  auth_token: string
}

export interface LoginSchema {
  authData?: LoginAuthData
  isLoading: boolean
  error?: string
  token?: string
}
