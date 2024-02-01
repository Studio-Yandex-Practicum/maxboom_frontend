import { CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'
import { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'

export interface StateSchema {
  login: LoginSchema
  storeReviews: StoreReviewsSchema
  category: CategorySchema
  coreBaseFooter: CoreBaseFooterSchema
  brand: BrandSchema
  searchResult: SearchResultSchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
