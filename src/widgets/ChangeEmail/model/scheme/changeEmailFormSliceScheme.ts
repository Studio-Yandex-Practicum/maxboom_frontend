import type { ApiErrorTypes } from '@/shared/api/types'

export interface IChangeEmailFormSchema {
  isLoading: boolean
  isSuccess: boolean
  error: string[] | ApiErrorTypes | null
}

export interface IChangeEmailForm {
  new_email: string
  current_password: string
}
