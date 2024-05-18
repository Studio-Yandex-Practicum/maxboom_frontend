import { FC } from 'react'

import ModalHeading from '@/entities/ModalHeading'
import SearchProduct from '@/features/SearchProduct'

import styles from './HeaderSearchModal.module.scss'

interface IHeaderSearchModal {
  isSearchModalOpen?: boolean
  handleClose?: () => void
}

/**
 * Модальное окно HeaderSearchModal - открывается по клику на кнопку "лупа" в правом верхнем углу, при ширине браузера не более 1200px
 * @param {function} handleClose - функция закрытия модального окна;
 * @param {boolean} isSearchModalOpen - состояние открытия модального окна;
 */

const HeaderSearchModal: FC<IHeaderSearchModal> = ({ isSearchModalOpen, handleClose }) => {
  return (
    <div className={styles.headerSearchModal}>
      {isSearchModalOpen && (
        <>
          <ModalHeading handleClose={handleClose} title="Поиск" />
          <div className={styles.headerSearchModal__container}>
            <SearchProduct handleClose={handleClose} isSearchModalOpen={isSearchModalOpen} />
          </div>
        </>
      )}
    </div>
  )
}

export default HeaderSearchModal
