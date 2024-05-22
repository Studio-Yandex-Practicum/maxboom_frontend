import { FC, Suspense, useEffect, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
import { logout } from '@/features/login/model/services/logout/logout'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './LogoutPage.module.scss'

export const LogoutPage: FC = () => {
  const { isScreenMd } = useResize()
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)

  useEffect(() => {
    dispatch(logout())
  }, [])

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
    { heading: 'Выход', href: '' }
  ]

  return (
    <div className={styles.logoutPage}>
      <WrapperForMainContent>
        <div className={styles.logoutPage__pageDescriptor}>
          <Heading>Выход</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.logoutPage__container}>
          {isScreenMd ? <SideBarMenu /> : <SideBarButton onClick={handleClick} />}
          <div className={styles.logoutPage__infoContainer}>
            <Heading>Вы вышли из Личного Кабинета.</Heading>
            <Paragraph>
              Ваша корзина покупок была сохранена. Она будет восстановлена при следующем входе в Ваш Личный
              Кабинет.
            </Paragraph>
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
