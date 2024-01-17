import { CategorySchema } from '@/entities/Category/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { ApiInstance } from '@/shared/api/api'

export interface StateSchema {
  login: LoginSchema
  category: CategorySchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
