import { CategoryId, CategorySlug, CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import { StoreReviewsSchema } from '@/widgets/ReviewsBlock/model/types/types'
import { IBlogPostsSchema } from '@/widgets/BlogBlock/model/types/types'
import { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'
import { IStoriesSchema } from '@/widgets/StoriesBlock/model/types/types'
import { CoreBaseHeaderSchema } from '@/widgets/Header/model/types/types'
import { TProductSchema } from '@/pages/ProductPage/model/types/productTypes'
import { CategoryListSchema } from '@/widgets/CategoryGrid/model/types/types'
import { ICategoryProductsSchema } from '@/pages/ProductsPage/types/types'
import { CategoryInfo, ICategorySchema, IMainCategorySchema } from '@/widgets/CategoryList/types/types'

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
