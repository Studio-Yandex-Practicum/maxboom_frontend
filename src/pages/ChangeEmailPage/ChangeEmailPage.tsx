import { FC, Suspense, useState } from 'react'

import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { ChangeEmail } from '@/widgets/ChangeEmail/ChangeEmail'
import { withAdaptiveSideBar } from '@/widgets/SideBarMenu'

import styles from './ChangeEmailPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
  { heading: 'Изменить E-Mail', href: '' }
]

export const ChangeEmailPage: FC = () => {
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
      <div className={styles.changeEmailPage__pageDescriptor}>
        <Heading>Изменить E-Mail</Heading>
        <Breadcrumbs links={links} />
      </div>
      <div className={styles.changeEmailPage__container}>
        <AdaptiveSideBar handleClick={handleClick} />
        <div className={styles.changeEmailPage__contentContainer}>
          <ChangeEmail />
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
