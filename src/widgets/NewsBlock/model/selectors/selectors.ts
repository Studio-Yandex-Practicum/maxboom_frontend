import { StateSchema } from '@/app/providers/StoreProvider'

export const getShopNewsSelector = (state: StateSchema) => {
  // console.log('Selector ShopNews', state.shopNews.news)
  return state.shopNews.news
}
