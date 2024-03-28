import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { AveregeMark } from '@/widgets/AveregeMark/AveregeMark'
import { FeedbackForm } from '@/widgets/FeedbackForm/FeedbackForm'
import { FeedbackList } from '@/widgets/FeedbackList/FeedbackList'

import styles from './FeedbackPage.module.scss'
import { getAverageMark, getFeedbacks } from './model/slice/feedbackSlice'

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

    dispatch(getAverageMark())
  }, [])

  return (
    <WrapperForMainContent>
      <div className={styles.feedbackpage}>
        <Heading type={HeadingType.NORMAL} className={styles.feedbackpage__header}>
          Отзывы о магазине
        </Heading>
        <div className={styles.feedbackpage__container}>
          <FeedbackList feedbacks={feedback.feedbacks} />
          <div className={styles.feedbackpage__rightcolumn}>
            <AveregeMark
              deliverySpeedScore={feedback.averageMark.delivery_speed_score__avg}
              qualityScore={feedback.averageMark.quality_score__avg}
              priceScore={feedback.averageMark.price_score__avg}
              score={feedback.averageMark.average_score__avg}
            />
            <FeedbackForm />
          </div>
        </div>
      </div>
    </WrapperForMainContent>
  )
}
