import { Nullable } from '@/shared/model/types/common'

export interface IUser {
  id: Nullable<number>
  email: Nullable<string>
}

export interface IUserSchema {
  isLoading: boolean
  error?: string | string[]
  user: IUser
}
