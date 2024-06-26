import { Suspense, useState } from 'react'

import SideBarMenuModal from '@/features/SideBarMenuModal'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Spinner from '@/shared/ui/Spinner/Spinner'
import DistributionForm from '@/widgets/DistributionForm/ui/DistributionForm'
import { withAdaptiveSideBar } from '@/widgets/SideBarMenu'

import WrapperForMainContent from '../../components/WrapperForMainContent/WrapperForMainContent'

import styles from './SubscriptionPage.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: '/account' },
  { heading: 'Рассылка', href: '' }
]

const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)
  const { isScreenLg } = useResize()
  const AdaptiveSideBar = withAdaptiveSideBar(isScreenLg)

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalClosing(true)
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
            <SideBarMenuModal handleClose={closeModal} />
          </Suspense>
        </Modal>
      )}

      <WrapperForMainContent>
        <div className={styles.container}>
          <Heading type={HeadingType.MEDIUM} className={styles.heading}>
            Подписка на новости
          </Heading>
          <Breadcrumbs links={links}></Breadcrumbs>
          <div className={styles.info}>
            <AdaptiveSideBar handleClick={handleClick} />
            <DistributionForm></DistributionForm>
          </div>
        </div>
      </WrapperForMainContent>
    </>
  )
}

export default SubscriptionPage
