import { FC, Suspense, useState } from 'react'
import { useNavigate } from 'react-router'

import SideBarMenuModal from '@/features/SideBarMenuModal'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useResize } from '@/shared/libs/hooks/useResize'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import { withAdaptiveSideBar } from '@/widgets/SideBarMenu'

import styles from './CreateAccountSuccess.module.scss'

const links = [
  { heading: 'Главная', href: '/' },
  { heading: 'Личный Кабинет', href: Routes.ACCOUNT },
  { heading: 'Успешно', href: '' }
]

/**
 * Страница успешной регистрации
 *
 */
export const CreateAccountSuccess: FC = () => {
  const { isScreenLg } = useResize()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false)
  const AdaptiveSideBar = withAdaptiveSideBar(isScreenLg)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onGoOnHandle = () => {
    navigate(Routes.LOGIN)
  }

  return (
    <WrapperForMainContent>
      <div className={styles.createAccountPage__pageDescriptor}>
        <Heading>Ваша учетная запись создана!</Heading>
        <Breadcrumbs links={links} />
      </div>
      <div className={styles.createAccountPage__container}>
        <AdaptiveSideBar handleClick={handleClick} />
        <div className={styles.createAccountPage__contentContainer}>
          <Paragraph>
            Поздравляем! Ваш Личный Кабинет был успешно создан. Для окончания регистарции перейдите по ссылке
            в письме!
          </Paragraph>
          <Paragraph>
            После завершения регистрации Вы сможете воспользоваться дополнительными возможностями: просмотр
            истории заказов, печать счета, изменение своей контактной информации и адресов доставки и многое
            другое.
          </Paragraph>
          <Paragraph>Если у Вас есть какие-либо вопросы, напишите нам.</Paragraph>
          <Button
            onClick={onGoOnHandle}
            size={ButtonSize.S}
            theme={ButtonTheme.PRIMARY}
            className={styles.createAccountPage__button}>
            Продолжить
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
  )
}
