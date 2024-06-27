import { FC, Suspense, useState } from 'react'

import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { ChangePassword } from '@/widgets/ChangePassword/ChangePassword'
import { withAdaptiveSideBar } from '@/widgets/SideBarMenu'

import styles from './ChangePasswordPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
  { heading: 'Изменить пароль', href: '' }
]

export const ChangePasswordPage: FC = () => {
  const { isScreenLg } = useResize()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)
  const AdaptiveSideBar = withAdaptiveSideBar(isScreenLg)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <WrapperForMainContent>
      <div className={styles.changePasswordPage__pageDescriptor}>
        <Heading>Изменить пароль</Heading>
        <Breadcrumbs links={links} />
      </div>
      <div className={styles.changePasswordPage__container}>
        <AdaptiveSideBar handleClick={handleClick} />
        <div className={styles.changePasswordPage__contentContainer}>
          <ChangePassword />
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
  )
}
