import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import IconClose from '@/assets/icons/IconClose.svg'
import styles from './Popup.module.scss'

interface IPopupProps extends HTMLAttributes<HTMLElement> {
  isPopupOpen: boolean
  onClose: VoidFunction
  className?: string | undefined
}

// @TODO: Ограничить перемещение табом внутри одного поп-апа
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/106

/**
 * Functional component for a popup window.
 * Place the content inside this component via the children prop.
 * @param {boolean} isPopupOpen - the status of the popup window (open or closed).
 * @param {function} onClose - handler function to close the popup.
 * @param {string} className - styles passed from the parent component.
 */
export const Popup = ({ isPopupOpen, onClose, className, children }: IPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const [isPopupClosing, setIsPopupClosing] = useState(false)

  const handleClose = () => {
    setIsPopupClosing(true)
  }

  const closePopup = useCallback(() => {
    onClose()
  }, [onClose])

  const popupContainerClass = classNames(
    styles['popup-container'],
    {
      [styles['popup-zoom-in']]: !isPopupClosing,
      [styles['popup-zoom-out']]: isPopupClosing
    },
    className
  )

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  // Для добавления слушателей событий при открытии модального окна и их удаления при его закрытии
  // Позволяет избежать возможных проблем с утечками памяти или продолжительной работы слушателей, когда они больше не нужны
  // useEffect обеспечивает активацию и деактивацию (через return) обработчиков событий
  // @TODO: Fix: Нажатие Esc закрывает все поп-апы, если их открыто несколько, а не только верхний (текущий активный)
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/105
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPopupOpen])

  // Таймер затираем на стадии размонтирования, т.к. реакт много раз рендерится и глобальная область заполняется
  useEffect(() => {
    if (isPopupClosing) {
      const timeout = setTimeout(closePopup, 300)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [isPopupClosing, closePopup])

  return createPortal(
    <div className={styles['popup-wrapper']} onClick={handleClose}>
      <div ref={popupRef} className={popupContainerClass} onClick={handleContentClick}>
        <div className={styles['cross-button']}>
          <IconClose onClick={handleClose} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('overlay') as HTMLElement
  )
}
