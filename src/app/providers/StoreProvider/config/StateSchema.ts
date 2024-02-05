import { CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'
import { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'
import { CoreBaseHeaderSchema } from '@/widgets/Header/model/types/types'

export interface StateSchema {
  login: LoginSchema
  storeReviews: StoreReviewsSchema
  category: CategorySchema
  coreBaseFooter: CoreBaseFooterSchema
  coreBaseHeader: CoreBaseHeaderSchema
  brand: BrandSchema
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
