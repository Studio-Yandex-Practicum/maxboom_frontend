import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { PopupWrapper } from '../PopupWrapper/PopupWrapper'
import styles from './Popup.module.scss'
import { IconClose } from '../icons/IconClose'

interface IPopupProps extends HTMLAttributes<HTMLElement> {
  isPopupOpen: boolean
  onClose: VoidFunction
}

/**
 * Функциональный компонент модального окна.
 * Внутрь этого компонента кладем содержимое (контент) через пропс children.
 * @param {boolean} isPopupOpen - статус модального окна (открыто, закрыто);
 * @param {function} onClose - функция-хендлер для закрытия модалки;
 */
export const Popup = (props: IPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const [isPopupClosing, setIsPopupClosing] = useState(false)

  const handleClose = () => {
    setIsPopupClosing(true)
    setTimeout(props.onClose, 300)
  }

  const popupContainerClass = classNames(styles['popup-container'], {
    [styles['popup-zoom-in']]: !isPopupClosing,
    [styles['popup-zoom-out']]: isPopupClosing
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        handleClose()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [props])

  return (
    <PopupWrapper onClose={handleClose}>
      <div ref={popupRef} className={popupContainerClass}>
        <div className={styles['cross-button']}>
          <IconClose onClick={handleClose} />
        </div>
        {props.children}
      </div>
    </PopupWrapper>
  )
}
