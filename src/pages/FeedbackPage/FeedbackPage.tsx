import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { AveregeMark } from '@/widgets/AveregeMark/AveregeMark'
import { FeedbackList } from '@/widgets/FeedbackList/FeedbackList'

import styles from './FeedbackPage.module.scss'
import { getFeedbacks } from './model/slice/feedbackSlice'

/**
 * Страница отзывов о сайте.
 * @
 */
export const FeedbackPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const feedback = useSelector((store: StateSchema) => store.feedback)

  useEffect(() => {
    //TODO реализовать пагинацию, временно отображать 1-ую страницу
    dispatch(getFeedbacks(1))
  }, [])

  return (
    <WrapperForMainContent>
      <div className={styles.feedbackpage}>
        <Heading type={HeadingType.NORMAL} className={styles.feedbackpage__header}>
          Отзывы о магазине
        </Heading>
        <div className={styles.feedbackpage__container}>
          <FeedbackList feedbacks={feedback.feedbacks} />
          <AveregeMark deliverySpeedScore={3} qualityScore={3} priceScore={2} score={2.8} />
        </div>
      </div>
    </WrapperForMainContent>
  )
}
