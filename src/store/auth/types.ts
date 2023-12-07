export interface LoginAuthData {
  email: string
  password: string
}

export interface AuthSchema {
  authData: LoginAuthData | undefined
  isLoading: boolean
  error?: string
}
