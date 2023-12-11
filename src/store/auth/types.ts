export interface LoginAuthData {
  email: string
  password: string
}

export interface LoginSchema {
  authData?: LoginAuthData
  isLoading: boolean
  error?: string
}

export interface LoginTokenData {
  auth_token: string
}
