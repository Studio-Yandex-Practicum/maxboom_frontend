import { FC, Suspense, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './AccountPage.module.scss'

/**
 * Страница для отобраения информации об аккаунте пользователя
 */
export const AccountPage: FC = () => {
  const { isScreenMd } = useResize()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Личный Кабинет', href: '' }
  ]

  return (
    <div className={styles.accountPage}>
      <WrapperForMainContent>
        <div className={styles.accountPage__pageDescriptor}>
          <Heading>Личный Кабинет</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.accountPage__container}>
          {isScreenMd ? <SideBarMenu /> : <SideBarButton onClick={handleClick} />}
          <div className={styles.accountPage__contentContainer}>
            <Heading>Обзор</Heading>
          </div>
        </div>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            onClose={changeModalState}
            isModalClosing={isModalClosing}
            setIsModalClosing={setIsModalClosing}>
            <Suspense fallback={<Spinner />}>
              <SideBarMenuModal handleClose={changeModalState} />
            </Suspense>
          </Modal>
        )}
      </WrapperForMainContent>
    </div>
  )
}
