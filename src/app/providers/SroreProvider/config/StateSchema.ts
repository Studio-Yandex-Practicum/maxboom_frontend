import { AuthSchema } from '@/store/auth/types'
import { AxiosInstance } from 'axios'

export interface StateSchema {
  auth: AuthSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance
}
