import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/login/model/slice/loginSlice'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from '@/shared/api/api'
import categorySlice from '@/entities/Category/slice/categorySlice'
import brandSlice from '@/widgets/BrandBlock/slice/brandSlice'
import searchProductSlice from '@/features/SearchProduct/slice/searchProductSlice'
import { storeReviewsReducer } from '@/widgets/ReviewsBlock/model/slice/reviewsSlice'
import footerSlice from '@/widgets/Footer/model/slice/footerSlice'
import { shopNewsReducer } from '@/widgets/NewsBlock/model/slice/shopNewsSlice'
import { blogPostsReducer } from '@/widgets/BlogBlock/model/slice/blogPostsSlice'

export type RootState = StateSchema

const rootReducer: ReducersMapObject<RootState> = {
  login: loginReducer,
  category: categorySlice,
  coreBaseFooter: footerSlice,
  brand: brandSlice,
  searchResult: searchProductSlice,
  storeReviews: storeReviewsReducer,
  shopNews: shopNewsReducer,
  blogPosts: blogPostsReducer
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
