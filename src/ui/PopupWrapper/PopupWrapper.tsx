import React, { HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import styles from './PopupWrapper.module.scss'

interface IPopupWrapperProps extends HTMLAttributes<HTMLElement> {
  onClose: VoidFunction
}

/**
 * Компонент-обертка для модального окна.
 * Создает портал и помещает его в div с id="overlay"
 * @param {function} onClose - функция-хендлер для закрытия модалки;
 */
export const PopupWrapper = (props: IPopupWrapperProps) => {
  return createPortal(
    <div className={styles['popup-wrapper']}>{props.children}</div>,
    document.getElementById('overlay') as HTMLElement
  )
}
