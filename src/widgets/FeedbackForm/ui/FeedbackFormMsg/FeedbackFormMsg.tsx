import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'

import { Button } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './FeedbackFormMsg.module.scss'

interface IFeedbackFormMsgProps {
  text: string
  isError: boolean
  disableClose?: boolean
  setShowMsg?: Dispatch<SetStateAction<boolean>>
}

/**
 * Компонент высплывающей ошибки на форме
 * @param  {string} text текст сообщения
 * @param  {boolean} isError true, если это сообщение об
 * @param  {boolean} [disableClose = false] true, если необходимо убрать возможность закрытия окна
 * @param  {function} setShowMsg set-функция управления видимостью данного компонента
 */
export const FeedbackFormMsg: FC<IFeedbackFormMsgProps> = ({
  text,
  isError,
  setShowMsg,
  disableClose = false
}) => {
  const onCloseHandel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (setShowMsg) setShowMsg(false)
  }

  return (
    <div className={`${styles.feddbacformmsg} ${isError && styles.feddbacformmsg_iserror}`}>
      <Paragraph className={styles.feddbacformmsg__text}>{text}</Paragraph>
      {!disableClose && (
        <Button type="button" className={styles.feddbacformmsg__btn} onClick={onCloseHandel}>
          X
        </Button>
      )}
    </div>
  )
}
