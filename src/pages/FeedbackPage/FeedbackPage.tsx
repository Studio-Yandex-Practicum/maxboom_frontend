import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import {
  getAverageMark,
  getFirstFeedbacks,
  getNextFeedbacks
} from '@/features/Reviews/model/slice/feedbacksSlice'
import { bodyScrollControl } from '@/shared/libs/helpers/popupHelper'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { AveregeMark } from '@/widgets/AveregeMark/AveregeMark'
import { FeedbackForm } from '@/widgets/FeedbackForm/FeedbackForm'
import { FeedbackList } from '@/widgets/FeedbackList/FeedbackList'

import styles from './FeedbackPage.module.scss'
import { FeedbackFormPopup } from './ui/FeedbackFormPopup/FeedbackFormPopup'

/**
 * Страница отзывов о сайте.
 *
 */
export const FeedbackPage = () => {
  const dispatch = useAppDispatch()
  const feedback = useSelector((store: StateSchema) => store.feedbacks)
  const { isScreenLg } = useResize()
  const [showPopup, setShowPopup] = useState(false)
  const { index } = useParams()

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Отзывы о магазине', href: '' }
  ]

  useEffect(() => {
    dispatch(getFirstFeedbacks())

    dispatch(getAverageMark())
  }, [])

  const fetchNextPage = () => {
    dispatch(getNextFeedbacks())
  }

  const showPopupBtnClickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setShowPopup(true)
    bodyScrollControl(true)
  }

  return (
    <WrapperForMainContent>
      <div className={styles.feedbackpage}>
        <div className={styles.feedbackpage__pageDescriptor}>
          <Heading>Отзывы о магазине</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.feedbackpage__container}>
          <FeedbackList
            targetId={(index && +index) || 0}
            feedbacks={feedback.feedbacks}
            isLoading={feedback.isLoading}
            nextPage={feedback.next}
            fetchNextPage={fetchNextPage}
          />
          <div className={styles.feedbackpage__rightcolumn}>
            <AveregeMark
              deliverySpeedScore={feedback.averageMark.delivery_speed_score__avg}
              qualityScore={feedback.averageMark.quality_score__avg}
              priceScore={feedback.averageMark.price_score__avg}
              score={feedback.averageMark.average_score__avg}
            />
            {isScreenLg ? (
              <FeedbackForm />
            ) : (
              <Button
                size={ButtonSize.S}
                theme={ButtonTheme.PRIMARY}
                type="button"
                className={styles.feedbackpage__submitbtn}
                onClick={showPopupBtnClickHandle}>
                Оставить отзыв
              </Button>
            )}
          </div>
        </div>
      </div>
      {showPopup && <FeedbackFormPopup setShowPopup={setShowPopup} />}
    </WrapperForMainContent>
  )
}
