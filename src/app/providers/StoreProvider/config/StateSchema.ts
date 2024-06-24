import { CategoryId, CategorySlug, CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import type { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import type { IBlogPostsSchema } from '@/widgets/BlogBlock/model/types/types'
import type { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'
import type { IStoriesSchema } from '@/widgets/StoriesBlock/model/types/types'
import type { CoreBaseHeaderSchema } from '@/widgets/Header/model/types/types'
import type { TProductSchema } from '@/pages/ProductPage/model/types/productTypes'
import type { CategoryListSchema } from '@/widgets/CategoryGrid/model/types/types'
import type { ICategoryProductsSchema } from '@/pages/ProductsPage/types/types'
import type { ICategorySchema, IMainCategorySchema } from '@/widgets/CategoryList/types/types'
import type { ICategoryFiltersSchema } from '@/shared/ui/Dropdown/types/types'
import type { IFeedbackFormSchema } from '@/widgets/FeedbackForm/model/scheme/feedbackFormSliceSchema'
import type { ICartEntitySchema } from '@/entities/CartEntity/model/types/types'
import type { IAboutUsSchema } from '@/pages/AboutUsPage/model/types/types'
import type { IFeedbackSchema } from '@/features/Reviews/model/types/types'
import type { TNumberOfPageSchema } from '@/widgets/Pagination/types/types'
import { ICreateAccountSchema } from '@/widgets/CreateAccount/model/types/types'

export interface StateSchema {
  aboutUs: IAboutUsSchema
  login: LoginSchema
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
  feedbackForm: IFeedbackFormSchema
  categoryId: CategoryId
  categorySlug: CategorySlug
  categoryBranches: ICategorySchema
  getCategories: IMainCategorySchema
  cartEntity: ICartEntitySchema
  categoryFilters: ICategoryFiltersSchema
  feedbacks: IFeedbackSchema
  pagination: TNumberOfPageSchema
  createAccount: ICreateAccountSchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
