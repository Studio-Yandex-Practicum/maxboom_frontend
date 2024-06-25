import { StateSchema } from '@/app/providers/StoreProvider'

export const getUserAuthStatus = (state: StateSchema) => state.login.isAuth
export const getLoadingAuthStatus = (state: StateSchema) => state.login.isLoading
export const getErrorAuthStatus = (state: StateSchema) => state.login.error
export const getCurrentUserEmail = (state: StateSchema) => state.login.user?.email
export const getCurrentUserSelector = (state: StateSchema) => state.login.user
