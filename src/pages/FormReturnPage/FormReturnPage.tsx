import { KeyboardEvent, FC, Suspense, lazy, useState } from 'react'

import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import SideBarButton from '@/entities/SideBarButton'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import FormReturn from '@/widgets/FormReturn'
import SideBarMenu from '@/widgets/SideBarMenu'

import styles from './FormReturnPage.module.scss'

const SideBarMenuModal = lazy(() => import('@/features/SideBarMenuModal'))

const links = [
  { heading: 'Главная', href: Routes.HOME },
  { heading: 'Личный Кабинет', href: Routes.LOGIN },
  { heading: 'Возврат товара', href: '' }
]

const FormReturnPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)
  const [user, setUser] = useState<string>('Elon Musk') // позже юзера будем получать из редакса

  const { isScreenLg } = useResize()

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleLogOut = () => {
    setUser('')
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      handleLogOut()
    }
  }

  return (
    <>
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
              user={user}
            />
          </Suspense>
        </Modal>
      )}
      <WrapperForMainContent>
        <section className={styles.formReturn}>
          <div className={styles.formReturn__titleBox}>
            <Heading type={HeadingType.MAIN} className={styles.formReturn__title}>
              Возврат товара
            </Heading>
            <Breadcrumbs links={links} />
          </div>
          <div className={styles.formReturn__mainBox}>
            {isScreenLg ? (
              <SideBarMenu user={user} handleLogOut={handleLogOut} />
            ) : (
              <SideBarButton onClick={handleClick} />
            )}
            <FormReturn />
          </div>
        </section>
      </WrapperForMainContent>
    </>
  )
}

export default FormReturnPage
