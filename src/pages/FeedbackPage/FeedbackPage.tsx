import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { FeedbackList } from '@/widgets/FeedbackList/FeedbackList'

import { getFeedbacks } from './model/slice/feedbackSlice'
/**
 * Страница отзывов о сайте.
 * @
 */
export const FeedbackPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const feedback = useSelector((store: StateSchema) => store.feedback)

  useEffect(() => {
    dispatch(getFeedbacks(1))
  }, [])

  return (
    <WrapperForMainContent>
      <FeedbackList feedbacks={feedback.feedbacks} />
    </WrapperForMainContent>
  )
}
