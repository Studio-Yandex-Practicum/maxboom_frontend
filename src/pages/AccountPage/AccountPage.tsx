import { FC, KeyboardEvent, Suspense, useState } from 'react'
/* import { useSelector } from 'react-redux' */

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
/* import { useUser } from '@/entities/User/model/hooks/useUser'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { logout } from '@/features/login/model/services/logout/logout' */
import SideBarMenuModal from '@/features/SideBarMenuModal'
/* import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store' */
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './AccountPage.module.scss'

export const AccountPage: FC = () => {
  const { isScreenMd } = useResize()
  /*   const dispatch = useAppDispatch()
  const user = useUser()
  const isAuth = useSelector(getUserAuthStatus) */
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleLogOut = () => {}

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      handleLogOut()
    }
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
        <div className={styles.favoritePage__container}>
          {isScreenMd ? <SideBarMenu handleLogOut={handleLogOut} /> : <SideBarButton onClick={handleClick} />}
        </div>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            onClose={changeModalState}
            isModalClosing={isModalClosing}
            setIsModalClosing={setIsModalClosing}>
            <Suspense fallback={<Spinner />}>
              <SideBarMenuModal
                handleClose={changeModalState}
                onKeyUp={handleKeyUp}
                handleLogOut={handleLogOut}
              />
            </Suspense>
          </Modal>
        )}
      </WrapperForMainContent>
    </div>
  )
}
