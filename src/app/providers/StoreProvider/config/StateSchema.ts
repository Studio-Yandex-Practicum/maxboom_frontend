import type { CategoryId, CategorySlug, CategorySchema } from '@/entities/Category/types/types'
import type { SearchResultSchema } from '@/features/SearchProduct/types/types'
import type { LoginSchema } from '@/features/login/model/types/types'
import type { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import type { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import type { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'
import type { IBlogPostsSchema } from '@/widgets/BlogBlock/model/types/types'
import type { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'
import type { IStoriesSchema } from '@/widgets/StoriesBlock/model/types/types'
import type { CoreBaseHeaderSchema } from '@/widgets/Header/model/types/types'
import type { TProductSchema } from '@/pages/ProductPage/model/types/productTypes'
import type { CategoryListSchema } from '@/widgets/CategoryGrid/model/types/types'
import type { ICategoryProductsSchema } from '@/pages/ProductsPage/types/types'
import type { ICategorySchema, IMainCategorySchema } from '@/widgets/CategoryList/types/types'

export interface StateSchema {
  login: LoginSchema
  storeReviews: StoreReviewsSchema
  category: CategorySchema
  categoryList: CategoryListSchema
  coreBaseFooter: CoreBaseFooterSchema
  coreBaseHeader: CoreBaseHeaderSchema
  brand: BrandSchema
  searchResult: SearchResultSchema
  shopNews: ShopNewsSchema
  stories: IStoriesSchema
  blogPosts: IBlogPostsSchema
  product: TProductSchema
  categoryProduct: ICategoryProductsSchema
  categoryId: CategoryId
  categorySlug: CategorySlug
  categoryBranches: ICategorySchema
  getCategories: IMainCategorySchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
