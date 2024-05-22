import { CategoryId, CategorySlug, CategorySchema } from '@/entities/Category/types/types'
import { SearchResultSchema } from '@/features/SearchProduct/types/types'
import { LoginSchema } from '@/features/login/model/types/types'
import { BrandSchema } from '@/widgets/BrandBlock/types/types'
import { ApiInstance } from '@/shared/api/api'
import { ShopNewsSchema } from '@/widgets/NewsBlock/model/types/types'
import { IBlogPostsSchema } from '@/widgets/BlogBlock/model/types/types'
import { CoreBaseFooterSchema } from '@/widgets/Footer/model/types/types'
import { IStoriesSchema } from '@/widgets/StoriesBlock/model/types/types'
import { CoreBaseHeaderSchema } from '@/widgets/Header/model/types/types'
import { TProductSchema } from '@/pages/ProductPage/model/types/productTypes'
import { CategoryListSchema } from '@/widgets/CategoryGrid/model/types/types'
import { ICategoryProductsSchema } from '@/pages/ProductsPage/types/types'
import { ICategorySchema, IMainCategorySchema } from '@/widgets/CategoryList/types/types'
import { ICategoryFiltersSchema } from '@/components/Dropdown/types/types'
import type { IFeedbackFormSchema } from '@/widgets/FeedbackForm/model/scheme/feedbackFormSliceSchema'
import { ICartEntitySchema } from '@/entities/CartEntity/model/types/types'
import { IAboutUsSchema } from '@/pages/AboutUsPage/model/types/types'
import { ICartSchema } from '@/pages/CartPage/model/types'
import { IProductAmountStateSchema } from '@/features/CartEdit/model/types'
import { IFeedbackSchema } from '@/features/Reviews/model/types/types'
import { TNumberOfPageSchema } from '@/components/Pagination/types/types'
import { IUserSchema } from '@/entities/User/model/types/types'

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
  cart: ICartSchema
  cartEntity: ICartEntitySchema
  categoryFilters: ICategoryFiltersSchema
  productAmount: IProductAmountStateSchema
  feedbacks: IFeedbackSchema
  pagination: TNumberOfPageSchema
  user: IUserSchema
}

export interface ThunkExtraArg {
  api: ApiInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
