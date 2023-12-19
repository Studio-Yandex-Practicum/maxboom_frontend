import { StateSchema } from '@/app/providers/SroreProvider'

export const getUserAuthStatus = (state: StateSchema) => state.login.isAuth
export const getLoadingAuthStatus = (state: StateSchema) => state.login.isLoading
export const getErrorAuthStatus = (state: StateSchema) => state.login.error
