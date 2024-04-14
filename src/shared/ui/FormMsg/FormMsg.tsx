import { FC, MouseEvent } from 'react'

import styles from './FormMsg.module.scss'

interface IFormMsgProps {
  text: string
  isError: boolean
  disableClose?: boolean
  closeHandel?: () => void
  className?: string
}

/**
 * Компонент высплывающей ошибки на форме
 * @param  {string} text текст сообщения
 * @param  {boolean} isError true, если это сообщение об ошибке
 * @param  {boolean} [disableClose = false] true, если необходимо убрать возможность закрытия окна
 * @param  {function} closeHandel void-функция, вызываемая при нажатии на кнопку закрытия
 */
export const FormMsg: FC<IFormMsgProps> = ({
  text,
  isError,
  closeHandel,
  className = '',
  disableClose = false
}) => {
  const onCloseHandel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (closeHandel) {
      closeHandel()
    }
  }

  return (
    <div className={`${styles.msg} ${isError && styles.msg_iserror} ${className}`}>
      <p className={styles.msg__text}>{text}</p>
      {!disableClose && (
        <button type="button" className={styles.msg__btn} onClick={onCloseHandel}>
          X
        </button>
      )}
    </div>
  )
}
