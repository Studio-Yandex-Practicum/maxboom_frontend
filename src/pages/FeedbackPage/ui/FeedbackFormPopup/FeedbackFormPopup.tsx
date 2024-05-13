import { Dispatch, FC, SetStateAction } from 'react'

import { bodyScrollControl } from '@/shared/libs/helpers/popupHelper'
import { Button } from '@/shared/ui/Button/Button'
import { FeedbackForm } from '@/widgets/FeedbackForm/FeedbackForm'

import styles from './FeedbackFormPopup.module.scss'

interface IFeedbackFormPopupProp {
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Попап с формой добавления отзыва
 *
 * @param {Dispatch<SetStateAction<boolean>>} setShowPopup Функция управления состоянием видимости попапа
 */
export const FeedbackFormPopup: FC<IFeedbackFormPopupProp> = ({ setShowPopup }) => {
  const closeClickHandle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    setShowPopup(false)
    bodyScrollControl(false)
  }

  return (
    <div className={styles.feedbackformpopup}>
      <div
        className={styles.feedbackformpopup__wrapper}
        style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
        <FeedbackForm />
        <Button className={styles.feedbackformpopup__closebtn} type="button" onClick={closeClickHandle}>
          ✕
        </Button>
      </div>
    </div>
  )
}
