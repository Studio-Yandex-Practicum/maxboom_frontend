import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './FeedbackFormMsg.module.scss'

interface IFeedbackFormMsgProps {
  text: string
  isError: boolean
  setShowMsg?: Dispatch<SetStateAction<boolean>>
}

/**
 * Компонент высплывающей ошибки на форме
 * @param text {string} - текст сообщения
 * @param isError {boolean} - true, если это сообщение об ошибке
 * @param isEsetShowMsgrror {f()} - set-функция управления видимостью данного компонента
 */
export const FeedbackFormMsg: FC<IFeedbackFormMsgProps> = ({ text, isError, setShowMsg }) => {
  const onCloseHandel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (setShowMsg) setShowMsg(false)
  }

  return (
    <div className={`${styles.feddbacformmsg} ${isError && styles.feddbacformmsg_iserror}`}>
      <Paragraph className={styles.feddbacformmsg__text}>{text}</Paragraph>
      {!isError && (
        <button type="button" className={styles.feddbacformmsg__btn} onClick={onCloseHandel}>
          X
        </button>
      )}
    </div>
  )
}
