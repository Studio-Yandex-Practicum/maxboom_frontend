import { StateSchema } from '@/app/providers/StoreProvider'

export const putCreateAccountSelector = (state: StateSchema) => {
  return state.newAccount
}
