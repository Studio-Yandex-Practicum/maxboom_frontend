import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/login/model/slice/loginSlice'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from '@/shared/api/api'
import categorySlice from '@/entities/Category/slice/categorySlice'

export type RootState = StateSchema

const rootReducer: ReducersMapObject<StateSchema> = {
  login: loginReducer,
  category: categorySlice
}

export function createReduxStore(initialState: StateSchema) {
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
