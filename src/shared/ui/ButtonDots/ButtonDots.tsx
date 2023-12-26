import React, { useEffect, useRef, useState } from 'react'
import styles from './ButtonDots.module.scss'

type TProps = {
  className?: string
  article: string
  removeProduct: (productArticle: string) => void
}

/**
 * @param {string} article - это номер артикула для понимая, с каким продуктом мы имеем дело
 */

export const ButtonDots: React.FC<TProps> = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const refContextMenu = useRef<HTMLDivElement | null>(null)
  const refDotsButtton = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', closeByOverlayHandler)
    }

    return () => {
      document.removeEventListener('click', closeByOverlayHandler)
    }
  }, [isMenuOpen])

  function closeByOverlayHandler(ev: MouseEvent) {
    const withinContextMenuBoundaries = refContextMenu.current!.contains(ev.target as Node)
    const withinDotsButtonBoundaries = refDotsButtton.current!.contains(ev.target as Node)

    if (!withinContextMenuBoundaries && !withinDotsButtonBoundaries) {
      setIsMenuOpen(false)
    }
  }

  function deleteProductHandler() {
    setIsMenuOpen(false)
    props.removeProduct(props.article)
  }
  function addToFavoritesHandler() {
    setIsMenuOpen(false)
    // add an action for this button
  }

  const onClickDotsHandler = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
    }
  }

  return (
    <div className={props.className}>
      <div className={styles.container}>
        <button className={styles.button} ref={refDotsButtton} onClick={onClickDotsHandler}>
          <svg viewBox="0 0 4 18" width="4px" height="18px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4a2 2 0 100-4 2 2 0 000 4zM2 11a2 2 0 100-4 2 2 0 000 4zM2 18a2 2 0 100-4 2 2 0 000 4z"
              fill="#343434"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div ref={refContextMenu} className={styles.wrapper}>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <button
                  type="button"
                  className={`${styles.menu_button} ${styles.menu_button_line}`}
                  onClick={addToFavoritesHandler}>
                  В закладки
                </button>
              </li>

              <li>
                <button type="button" className={styles.menu_button} onClick={deleteProductHandler}>
                  Удалить
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default ButtonDots
