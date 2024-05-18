import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/login/model/slice/loginSlice'
import { $api } from '@/shared/api/api'
import categorySlice from '@/entities/Category/slice/categorySlice'
import brandSlice from '@/widgets/BrandBlock/slice/brandSlice'
import searchProductSlice from '@/features/SearchProduct/slice/searchProductSlice'
import footerSlice from '@/widgets/Footer/model/slice/footerSlice'
import { shopNewsReducer } from '@/widgets/NewsBlock/model/slice/shopNewsSlice'
import { storiesReducer } from '@/widgets/StoriesBlock/model/slice/storiesSlice'
import { blogPostsReducer } from '@/widgets/BlogBlock/model/slice/blogPostsSlice'
import headerSlice from '@/widgets/Header/model/slice/headerSlice'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { productSliceReducer } from '@/pages/ProductPage/model/slice/productSlice'
import categoryGridSlice from '@/widgets/CategoryGrid/model/slice/categoryGridSlice'
import { categoriesProductsReducer } from '@/pages/ProductsPage/slice/productsOfCategorySlice'
import { categoryIdSliceReducer } from '@/entities/Category/slice/categoryIdSlice'
import { categorySlugSliceReducer } from '@/entities/Category/slice/categorySlugSlice'
import { categoryBranchesReducer } from '@/widgets/CategoryList/slice/pageCategoryBranchesSlice'
import { getCategoriesReducer } from '@/widgets/CategoryList/slice/pageCategoriesSlice'
import { categoryFiltersSliceReducer } from '@/components/Dropdown/slice/filtersSlice'
import { feedbackFormReducer } from '@/widgets/FeedbackForm/model/slice/feedbackFormSlice'
import { aboutUsReducer } from '@/pages/AboutUsPage/model/slice/aboutUsSlice'
import { cartReducer } from '@/pages/CartPage/model/slice'
import { cartEntityReducer } from '@/entities/CartEntity/model/slice/cartEntitySlice'
import { productAmountReducer } from '@/features/CartEdit/model/slice/productAmountSlice'
import { feedbacksReducer } from '@/features/Reviews/model/slice/feedbacksSlice'
import { paginationSliceReducer } from '@/components/Pagination/slice/paginationSlice'

export type RootState = StateSchema

const rootReducer: ReducersMapObject<RootState> = {
  aboutUs: aboutUsReducer,
  login: loginReducer,
  category: categorySlice,
  coreBaseHeader: headerSlice,
  coreBaseFooter: footerSlice,
  brand: brandSlice,
  searchResult: searchProductSlice,
  shopNews: shopNewsReducer,
  stories: storiesReducer,
  blogPosts: blogPostsReducer,
  product: productSliceReducer,
  categoryProduct: categoriesProductsReducer,
  categoryList: categoryGridSlice,
  feedbacks: feedbacksReducer,
  feedbackForm: feedbackFormReducer,
  categoryId: categoryIdSliceReducer,
  categorySlug: categorySlugSliceReducer,
  categoryBranches: categoryBranchesReducer,
  getCategories: getCategoriesReducer,
  cartEntity: cartEntityReducer,
  cart: cartReducer,
  categoryFilters: categoryFiltersSliceReducer,
  productAmount: productAmountReducer,
  pagination: paginationSliceReducer
}

export function createReduxStore(initialState: RootState) {
  const extraArg: ThunkExtraArg = {
    api: $api
  }
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
