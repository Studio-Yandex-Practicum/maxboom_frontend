import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { createFocusTrap } from 'focus-trap'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

interface IModalProps extends HTMLAttributes<HTMLElement> {
  isModalOpen: boolean
  onClose: VoidFunction
  className?: string | undefined
}

// Поменял импорт на дефолтный, чтобы можно было использовать React.lazy

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

  const handleClickWrapper = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current === event.target && isModalOpen) {
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
    document.addEventListener('mousedown', handleClickWrapper)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickWrapper)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, handleClickWrapper])

  // Таймер затираем на стадии размонтирования, т.к. реакт много раз рендерится и глобальная область заполняется
  useEffect(() => {
    let closeTimeout: NodeJS.Timeout
    if (isModalClosing) {
      closeTimeout = setTimeout(() => {
        closeModal()
      }, 300)
    }

    return () => {
      clearTimeout(closeTimeout)
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

  return createPortal(
    <div className={styles['modal-wrapper']} onClick={handleClose}>
      <div ref={modalRef} className={modalContainerClass} onClick={handleContentClick}>
        {children}
      </div>
    </div>,
    document.getElementById('overlay') as HTMLElement
  )
}
