import { FC, Suspense, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
import SideBarMenuModal from '@/features/SideBarMenuModal'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import { AccountCart } from '@/widgets/AccountCart/AccountCart'
import { AccountMenu } from '@/widgets/AccountMenu/AccountMenu'
import { AccountSubscribe } from '@/widgets/AccountSubscribe/AccountSubscribe'
import { LastOrder } from '@/widgets/LastOrder/LastOrder'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './AccountPage.module.scss'

/**
 * Страница для отобраения информации об аккаунте пользователя
 */
export const AccountPage: FC = () => {
  const { isScreenLg } = useResize()
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
          {isScreenLg ? <SideBarMenu /> : <SideBarButton onClick={handleClick} />}
          <div className={styles.accountPage__contentContainer}>
            <div className={styles.accountPage__dataGrid}>
              <div className={styles.accountPage__leftSide}>
                <LastOrder />
                <AccountCart />
              </div>
              <div className={styles.accountPage__accMenu}>
                <AccountMenu />
              </div>
              <div className={styles.accountPage__subccribe}>
                <AccountSubscribe />
              </div>
            </div>
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
