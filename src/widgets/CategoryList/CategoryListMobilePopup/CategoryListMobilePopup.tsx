import { type FC, useState } from 'react'

import MobileMenuIcon from '@/shared/icons/MobileMenuIcon.svg'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Modal from '@/shared/ui/Modal/Modal'
import { CategoryList } from '@/widgets/CategoryList/CategoryList'
import styles from '@/widgets/CategoryList/CategoryListMobilePopup/CategoryListMobilePopup.module.scss'

export const CategoryListMobilePopup: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <>
      <Button
        className={styles.customButton}
        theme={ButtonTheme.OUTLINED}
        size={ButtonSize.S}
        onClick={changeModalState}>
        Категории
        <MobileMenuIcon className={styles.customButton} />
      </Button>
      {isModalOpen && (
        <Modal
          className={styles.modal}
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <div className={styles.modalBlock}>
            <CategoryList className={styles.mobileVisible} />
            <Button
              className={styles.buttonClose}
              theme={ButtonTheme.OUTLINED}
              size={ButtonSize.S}
              onClick={changeModalState}>
              Закрыть
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
