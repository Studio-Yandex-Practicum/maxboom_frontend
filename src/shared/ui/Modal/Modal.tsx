import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { createFocusTrap } from 'focus-trap'
import IconClose from '@/assets/icons/IconClose.svg'
import styles from './Modal.module.scss'
import { Button } from '@/shared/ui/Button/Button'

interface IModalProps extends HTMLAttributes<HTMLElement> {
  isModalOpen: boolean
  onClose: VoidFunction
  className?: string | undefined
}

// Поменял импорт на дефолтный, чтобы можно было использовать React.lazy
// @TODO: Ограничить перемещение табом внутри одного поп-апа
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/106

/**
 * Functional component for a modal window.
 * Place the content inside this component via the children prop.
 * @param {boolean} isModalOpen - the status of the modal window (open or closed).
 * @param {function} onClose - handler function to close the modal.
 * @param {string} className - styles passed from the parent component.
 */
export default function Modal({ isModalOpen, onClose, className, children }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const closeDelayTimeout = useRef<number | null>(null)

  const handleClose = useCallback(() => {
    setIsModalClosing(true)
  }, [])

  const closeModal = useCallback(() => {
    onClose()
  }, [onClose])

  const modalContainerClass = classNames(
    styles['modal-container'],
    {
      [styles['modal-zoom-in']]: !isModalClosing,
      [styles['modal-zoom-out']]: isModalClosing
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
      if (event.key === 'Escape' && isModalOpen) {
        const neighboringModals = document.querySelectorAll(`.${styles['modal-container']}`)
        const lastNeighboringModal = neighboringModals[neighboringModals.length - 1]
        const isLastModal = lastNeighboringModal && lastNeighboringModal.contains(modalRef.current)
        if (isLastModal) {
          handleClose()
        }
      }
    },
    [handleClose, isModalOpen]
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
    if (isModalClosing) {
      closeDelayTimeout.current = window.setTimeout(() => {
        closeModal()
      }, 300)
    } else if (closeDelayTimeout.current) {
      clearTimeout(closeDelayTimeout.current)
      closeDelayTimeout.current = null
    }
  }, [isModalClosing, closeModal])

  useEffect(() => {
    const trap = createFocusTrap(modalRef.current as HTMLDivElement, {
      allowOutsideClick: true
    })

    if (isModalOpen) {
      trap.activate()
    }

    return () => {
      trap.deactivate()
    }
  }, [isModalOpen])

  return (
    <div className={styles['modal-wrapper']} onClick={handleClose}>
      <div ref={modalRef} className={modalContainerClass} onClick={handleContentClick}>
        <Button className={styles['cross-button']}>
          <IconClose onClick={handleClose} />
        </Button>
        {children}
      </div>
    </div>
  )
}
