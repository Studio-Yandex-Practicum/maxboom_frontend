import { StateSchema } from '@/app/providers/StoreProvider'

export const getShopNewsSelector = (state: StateSchema) => {
  return state.shopNews.news
}
