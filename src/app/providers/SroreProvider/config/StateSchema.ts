import { LoginSchema } from '@/features/login/model/types/types'
import { ApiInstance } from '@/shared/api/api'
import { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'

export interface StateSchema {
  login: LoginSchema
  storeReviews: StoreReviewsSchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
