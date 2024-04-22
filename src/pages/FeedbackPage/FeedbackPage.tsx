import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import { bodyScrollControl } from '@/shared/libs/helpers/popupHelper'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { AveregeMark } from '@/widgets/AveregeMark/AveregeMark'
import { FeedbackForm } from '@/widgets/FeedbackForm/FeedbackForm'
import { FeedbackList } from '@/widgets/FeedbackList/FeedbackList'

import styles from './FeedbackPage.module.scss'
import { getAverageMark, getFeedbacks } from './model/slice/feedbackSlice'
import { FeedbackFormPopup } from './ui/FeedbackFormPopup/FeedbackFormPopup'

/**
 * Страница отзывов о сайте.
 *
 */
export const FeedbackPage = () => {
  const dispatch = useAppDispatch()
  const feedback = useSelector((store: StateSchema) => store.feedback)
  const { isScreenLg } = useResize()
  const [showPopup, setShowPopup] = useState(false)

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Отзывы о магазине', href: '' }
  ]

  useEffect(() => {
    //TODO реализовать пагинацию, временно отображать 1-ую страницу
    dispatch(getFeedbacks(1))

    dispatch(getAverageMark())
  }, [])

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
          <FeedbackList feedbacks={feedback.feedbacks} />
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
