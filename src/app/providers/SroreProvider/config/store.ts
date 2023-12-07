import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from '@/store/auth/AuthSlice'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from '@/shared/api/api'

const rootReducer: ReducersMapObject<StateSchema> = {
  auth: authReducer
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
