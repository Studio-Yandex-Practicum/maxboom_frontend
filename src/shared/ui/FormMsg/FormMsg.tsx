import { FC, MouseEvent, useEffect, useState } from 'react'

import styles from './FormMsg.module.scss'
import { EMsgType } from './model/types/types'

interface IFormMsgProps {
  text: string
  isError: boolean
  disableClose?: boolean
  closeHandle?: () => void
  className?: string
  type?: EMsgType
}

/**
 * Компонент высплывающей ошибки на форме
 * @param  {string} text текст сообщения
 * @param  {boolean} isError true, если это сообщение об ошибке
 * @param  {boolean} [disableClose = false] true, если необходимо убрать возможность закрытия окна
 * @param  {function} closeHandle void-функция, вызываемая при нажатии на кнопку закрытия
 * @param  {EMsgType} type тип высплывающей ошибки: EMsgType.popup - открывает как банер-попап ввреху страницы, EMsgType.form (по умолчанию) открывает в зависимости от места в tsx
 */
export const FormMsg: FC<IFormMsgProps> = ({
  text,
  isError,
  closeHandle,
  className = '',
  type = EMsgType.form,
  disableClose = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const onCloseHandel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (typeof closeHandle === 'function') {
      if (type === EMsgType.popup) {
        setIsOpen(false)
        setTimeout(() => {
          closeHandle()
        }, 500)
      } else {
        closeHandle()
      }
    }
  }

  useEffect(() => {
    if (type === EMsgType.popup) {
      setIsOpen(true)
    }
  }, [])

  return (
    <div
      className={`${styles.msg} ${isError && styles.msg_iserror} ${className} ${
        type === EMsgType.popup && styles.msg_ispopup
      } ${isOpen && styles.msg_popupIsOpen}`}>
      <p className={styles.msg__text}>{text}</p>
      {!disableClose && (
        <button type="button" className={styles.msg__btn} onClick={onCloseHandel}>
          X
        </button>
      )}
    </div>
  )
}
