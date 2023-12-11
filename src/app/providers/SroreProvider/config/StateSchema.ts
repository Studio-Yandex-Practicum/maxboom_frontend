import { AxiosInstance } from 'axios'
import { LoginSchema } from '@/features/login/model/types/types'

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
