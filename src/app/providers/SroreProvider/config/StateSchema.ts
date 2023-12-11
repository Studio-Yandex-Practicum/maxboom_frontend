import { LoginSchema } from '@/store/auth/types'
import { AxiosInstance } from 'axios'

export interface StateSchema {
  login: LoginSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
