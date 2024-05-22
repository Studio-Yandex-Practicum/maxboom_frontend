import { FC, Suspense, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './LogoutPage.module.scss'

export const LogoutPage: FC = () => {
  const navigate = useNavigate()
  const { isScreenMd } = useResize()
  const isAuth = useSelector(getUserAuthStatus)
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
    { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
    { heading: 'Выход', href: '' }
  ]

  const onMainHandle = () => {
    navigate(Routes.HOME)
  }

  const sideBar = useMemo(() => {
    if (!isAuth) {
      return isScreenMd ? <SideBarMenu /> : <SideBarButton onClick={handleClick} />
    }
    return null
  }, [isScreenMd, isAuth])

  return (
    <div className={styles.logoutPage}>
      <WrapperForMainContent>
        <div className={styles.logoutPage__pageDescriptor}>
          <Heading>Выход</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.logoutPage__container}>
          {sideBar}
          <div className={styles.logoutPage__infoContainer}>
            <Heading>Вы вышли из Личного Кабинета.</Heading>
            <Paragraph>
              Ваша корзина покупок была сохранена. Она будет восстановлена при следующем входе в Ваш Личный
              Кабинет.
            </Paragraph>
            <Button
              onClick={onMainHandle}
              size={ButtonSize.S}
              theme={ButtonTheme.PRIMARY}
              className={styles.logoutPage__button}>
              На главную
            </Button>
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
