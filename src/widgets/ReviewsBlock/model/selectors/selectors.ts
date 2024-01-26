import { StateSchema } from '@/app/providers/StoreProvider'

export const getStoreReviewsSelector = (state: StateSchema) => {
  return state.storeReviews.reviews
}
