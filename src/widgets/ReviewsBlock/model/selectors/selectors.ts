import { StateSchema } from '@/app/providers/SroreProvider'

export const getStoreReviewsSelector = (state: StateSchema) => {
  return state.storeReviews.reviews
}
