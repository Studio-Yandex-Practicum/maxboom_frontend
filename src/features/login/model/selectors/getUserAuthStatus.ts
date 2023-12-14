import { StateSchema } from '@/app/providers/SroreProvider'

export const getUserAuthStatus = (state: StateSchema) => !!state.login.token
