import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { VIEW_TEN_ITEMS, VIEW_THREE_ITEMS, VIEW_TWO_ITEMS } from '@/shared/constants/constants'

const useReviewArray = () => {
  const reviews = useSelector((store: StateSchema) => store.feedbacks.feedbacks)

  return {
    twoReviewArray: reviews.slice(0, VIEW_TWO_ITEMS),
    threeReviewArray: reviews.slice(0, VIEW_THREE_ITEMS),
    mobileReviewArray: reviews.slice(0, VIEW_TEN_ITEMS),
    allReviewArray: reviews
  }
}

export default useReviewArray
