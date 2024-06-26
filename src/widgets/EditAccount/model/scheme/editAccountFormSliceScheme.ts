import type { ApiErrorTypes } from '@/shared/api/types'

export interface IEditAccountFormSchema {
  isLoading: boolean
  isSuccess: boolean
  error: string[] | ApiErrorTypes | null
  userprofile: IUserprofile | null
}

export interface IUserprofile {
  first_name: string
  about: string
  last_name: string
  company: string
  is_vendor: boolean
}
