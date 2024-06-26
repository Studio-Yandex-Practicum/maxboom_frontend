import { StateSchema } from '@/app/providers/StoreProvider'
import { RootState } from '@/app/providers/StoreProvider/config/store'

export const getNewsItemSelector = (state: StateSchema) => {
  return state.newsItem.newsItemData
}

export const getLoading = (state: RootState) => {
  return state.newsItem.isLoading
}
