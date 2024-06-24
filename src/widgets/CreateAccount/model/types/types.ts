export interface ICreateAccountForm {
  name?: string
  surname?: string
  email: string
  tel?: string
  country?: string
  region?: string
  index?: string
  model?: string
  city?: string
  password: string
  passwordConfirmation: string
  subscription?: string
  agreement?: boolean
}

export type TCreateAccountPayload = Omit<ICreateAccountForm, 'passwordConfirmation'>

export interface ICreateAccountResult {
  email: string
  id: number
}

export interface ICreateAccountSchema {
  isLoading: boolean
  user: {
    id: null
    email: null
  }
  error?: string | string[]
}
