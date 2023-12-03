import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import IconClose from '@/assets/icons/IconClose.svg'
import styles from './Popup.module.scss'

interface IPopupProps extends HTMLAttributes<HTMLElement> {
  isPopupOpen: boolean
  onClose: VoidFunction
  className?: string | undefined
}

// Поменял импорт на дефолтный, чтобы можно было использовать React.lazy
// @TODO: Ограничить перемещение табом внутри одного поп-апа
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/106

/**
 * Functional component for a popup window.
 * Place the content inside this component via the children prop.
 * @param {boolean} isPopupOpen - the status of the popup window (open or closed).
 * @param {function} onClose - handler function to close the popup.
 * @param {string} className - styles passed from the parent component.
 */
export default function Popup({ isPopupOpen, onClose, className, children }: IPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)
  const [isPopupClosing, setIsPopupClosing] = useState(false)
  const closeDelayTimeout = useRef<number | null>(null)

  const handleClose = useCallback(() => {
    setIsPopupClosing(true)
  }, [])

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

  // @TODO: Не работает клик по wrapper для закрытия модалки
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/118
  const handleContentClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPopupOpen) {
        const neighboringPopups = document.querySelectorAll(`.${styles['popup-container']}`)
        const lastNeighboringPopup = neighboringPopups[neighboringPopups.length - 1]
        const isLastPopup = lastNeighboringPopup && lastNeighboringPopup.contains(popupRef.current)
        if (isLastPopup) {
          handleClose()
        }
      }
    },
    [handleClose, isPopupOpen]
  )

  // Для добавления слушателей событий при открытии модального окна и их удаления при его закрытии
  // Позволяет избежать возможных проблем с утечками памяти или продолжительной работы слушателей, когда они больше не нужны
  // useEffect обеспечивает активацию и деактивацию (через return) обработчиков событий
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Таймер затираем на стадии размонтирования, т.к. реакт много раз рендерится и глобальная область заполняется
  useEffect(() => {
    if (isPopupClosing) {
      closeDelayTimeout.current = window.setTimeout(() => {
        closePopup()
      }, 300)
    } else if (closeDelayTimeout.current) {
      clearTimeout(closeDelayTimeout.current)
      closeDelayTimeout.current = null
    }
  }, [isPopupClosing, closePopup])

  return (
    <div className={styles['popup-wrapper']} onClick={handleClose}>
      <div ref={popupRef} className={popupContainerClass} onClick={handleContentClick}>
        <div className={styles['cross-button']}>
          <IconClose onClick={handleClose} />
        </div>
        {children}
      </div>
    </div>
  )
}
