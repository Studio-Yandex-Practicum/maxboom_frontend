import { CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { ApiInstance } from '@/shared/api/api'
import { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'

export interface StateSchema {
  login: LoginSchema
  storeReviews: StoreReviewsSchema
  category: CategorySchema
  searchResult: SearchResultSchema
  shopNews: ShopNewsSchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
