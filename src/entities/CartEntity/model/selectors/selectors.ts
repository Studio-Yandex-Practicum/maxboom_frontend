import { StateSchema } from '@/app/providers/StoreProvider'

export const getCartSelector = (state: StateSchema) => {
  return state.cartEntity.cart
}
