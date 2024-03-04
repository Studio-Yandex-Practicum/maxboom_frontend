import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/login/model/slice/loginSlice'
import { $api } from '@/shared/api/api'
import categorySlice from '@/entities/Category/slice/categorySlice'
import brandSlice from '@/widgets/BrandBlock/slice/brandSlice'
import searchProductSlice from '@/features/SearchProduct/slice/searchProductSlice'
import { storeReviewsReducer } from '@/widgets/ReviewsBlock/model/slice/reviewsSlice'
import footerSlice from '@/widgets/Footer/model/slice/footerSlice'
import { shopNewsReducer } from '@/widgets/NewsBlock/model/slice/shopNewsSlice'
import { storiesReducer } from '@/widgets/StoriesBlock/model/slice/storiesSlice'
import { blogPostsReducer } from '@/widgets/BlogBlock/model/slice/blogPostsSlice'
import headerSlice from '@/widgets/Header/model/slice/headerSlice'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { productSliceReducer } from '@/pages/ProductPage/model/slice/productSlice'

export type RootState = StateSchema

const rootReducer: ReducersMapObject<RootState> = {
  login: loginReducer,
  category: categorySlice,
  coreBaseHeader: headerSlice,
  coreBaseFooter: footerSlice,
  brand: brandSlice,
  searchResult: searchProductSlice,
  storeReviews: storeReviewsReducer,
  shopNews: shopNewsReducer,
  stories: storiesReducer,
  blogPosts: blogPostsReducer,
  product: productSliceReducer

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
