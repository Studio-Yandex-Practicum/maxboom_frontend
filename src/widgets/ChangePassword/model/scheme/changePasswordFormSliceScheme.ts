import type { ApiErrorTypes } from '@/shared/api/types'

export interface IChangePasswordFormSchema {
  isLoading: boolean
  isSuccess: boolean
  error: string[] | ApiErrorTypes | null
}

export interface IChangePasswordForm {
  current_password: string
  new_password: string
  new_passwordConfirmation: string
}

export type IChangePassword = Omit<IChangePasswordForm, 'new_passwordConfirmation'>
