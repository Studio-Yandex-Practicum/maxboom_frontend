import React, { useEffect, useRef, useState } from 'react'

import styles from './ButtonDots.module.scss'

type TProps = {
  className?: string
  isMenuOpen: boolean
  children: React.ReactNode
}

/**
 * Компонент нужен для работы с продуктами в корзине: При наведении на кнопку появляется окно с кнопками Закладки и Удалить.
 * @param {string} className - дает возможность добавлять нужные стили
 * @param {React.ReactNode} children - это контекстное меню, которое появляется при нажатии на кнопку
 * @param {boolean} - нужно для открытия меню
 */

export const ButtonDots: React.FC<TProps> = ({ isMenuOpen, children, className }) => {
  const [isMenuOpened, setIsMenuOpen] = useState(false)
  const refContextMenu = useRef<HTMLDivElement | null>(null)
  const refDotsButtton = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (isMenuOpened) {
      document.addEventListener('click', closeByOverlayHandler)
    }

    return () => {
      document.removeEventListener('click', closeByOverlayHandler)
    }
  }, [isMenuOpened])

  useEffect(() => {
    setIsMenuOpen(isMenuOpen)
  }, [isMenuOpen])

  function closeByOverlayHandler(ev: MouseEvent) {
    if (refContextMenu && refDotsButtton && refContextMenu.current && refDotsButtton.current) {
      const withinContextMenuBoundaries = refContextMenu.current.contains(ev.target as Node)
      const withinDotsButtonBoundaries = refDotsButtton.current.contains(ev.target as Node)

      if (!withinContextMenuBoundaries && !withinDotsButtonBoundaries) {
        setIsMenuOpen(false)
      }
    }
  }

  const onClickDotsHandler = () => {
    if (!isMenuOpened) {
      setIsMenuOpen(true)
    }
  }

  return (
    <div className={className}>
      <div className={styles.container}>
        <button className={styles.button} ref={refDotsButtton} onClick={onClickDotsHandler}>
          <svg viewBox="0 0 4 18" width="4px" height="18px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4a2 2 0 100-4 2 2 0 000 4zM2 11a2 2 0 100-4 2 2 0 000 4zM2 18a2 2 0 100-4 2 2 0 000 4z"
              fill="#343434"
            />
          </svg>
        </button>
        {isMenuOpened && <div ref={refContextMenu}>{children}</div>}
      </div>
    </div>
  )
}
export default ButtonDots
