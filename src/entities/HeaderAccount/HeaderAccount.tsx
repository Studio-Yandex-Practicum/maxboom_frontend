import { FC, lazy, useState, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import CartIcon from '@/assets/icons/IconCart.svg'
import HeartIcon from '@/assets/icons/IconHeart.svg'
import PersonIcon from '@/assets/icons/IconPerson.svg'
import PersonAuthIcon from '@/assets/icons/IconPersonAuth.svg'
import ScalesIcon from '@/assets/icons/IconScales.svg'
import SearchIcon from '@/assets/icons/iconSearch.svg'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { logout } from '@/features/login/model/services/logout/logout'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import { Button } from '@/shared/ui/Button/Button'
import Link from '@/shared/ui/Link/Link'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'

import styles from './headerAccount.module.scss'

export type HeaderAccountProps = {
  isMenuModalOpen?: boolean
  handleClose?: () => void
  counter: number
  total: string
}

const LazyLoginForm = lazy(() => import('@/features/login/index'))

/**
 * Компонент хедера, показывающий блок аккаунта
 * @param {boolean} isMenuModalOpen - состояние открытия модального окна
 * @param {string} counter - счетчик количества товаров в корзине
 * @param {string} total - полная стоимость
 */
const HeaderAccount: FC<HeaderAccountProps> = ({ isMenuModalOpen, handleClose, counter, total }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const { isScreenLg } = useResize()

  const dispatch = useAppDispatch()
  const isAuth = useSelector(getUserAuthStatus)

  const handlePersonIconClick = () => {
    setIsModalOpen(true)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
    dispatch(loginActions.errorReset())
  }

  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (isAuth && isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }
  }, [isModalOpen, isAuth])

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <Suspense fallback={<Spinner />}>
            <LazyLoginForm />
          </Suspense>
        </Modal>
      )}
      <ul
        className={
          isScreenLg || isMenuModalOpen ? `${styles.headerAccount}` : `${styles.headerAccount__mobile}`
        }>
        {isScreenLg || isMenuModalOpen ? null : <SearchIcon className={styles.headerAccount__icon} />}
        <li>
          {/* Временная реализация
          TODO заменить на дропдаун на ховер в контекстном меню добавить пункт-кнопку для разлогина пока висит на иконке */}
          <Button
            onClick={isAuth ? onLogout : handlePersonIconClick}
            className={
              isScreenLg || isMenuModalOpen
                ? `${styles.headerAccount__cart}`
                : `${styles.headerAccount__cartMobile}`
            }>
            {isAuth ? (
              <PersonAuthIcon
                className={
                  isMenuModalOpen
                    ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                    : `${styles.headerAccount__icon}`
                }
              />
            ) : (
              <PersonIcon
                className={
                  isMenuModalOpen
                    ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                    : `${styles.headerAccount__icon}`
                }
              />
            )}
          </Button>
        </li>

        {isScreenLg || isMenuModalOpen ? (
          <li>
            <Link onClick={handleClose} to={Routes.COMPARE} className={styles.headerAccount__cart}>
              <ScalesIcon
                className={
                  isMenuModalOpen
                    ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                    : `${styles.headerAccount__icon}`
                }
              />
            </Link>
          </li>
        ) : null}

        {isScreenLg || isMenuModalOpen ? (
          <li>
            <Link onClick={handleClose} to={Routes.FAVORITES} className={styles.headerAccount__cart}>
              <HeartIcon
                className={
                  isMenuModalOpen
                    ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                    : `${styles.headerAccount__icon}`
                }
              />
            </Link>
          </li>
        ) : null}

        <li>
          <Link
            onClick={handleClose}
            to={Routes.CART}
            className={
              isScreenLg || isMenuModalOpen
                ? `${styles.headerAccount__cart}`
                : `${styles.headerAccount__cartMobile}`
            }>
            {isScreenLg || isMenuModalOpen ? (
              <>
                <CartIcon
                  className={
                    isMenuModalOpen
                      ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                      : `${styles.headerAccount__icon}`
                  }
                />
                <div className={styles.headerAccount__cartContainer}>
                  <div className={styles.headerAccount__counterContainer}>
                    <Paragraph className={styles.headerAccount__cartTotalText}>Корзина</Paragraph>
                    <Paragraph className={styles.headerAccount__cartCounter}>{counter}</Paragraph>
                  </div>
                  <Paragraph
                    className={
                      isMenuModalOpen
                        ? `${styles.headerAccount__cartTotal} ${styles.headerAccount__cartTotal_dark}`
                        : `${styles.headerAccount__cartTotal}`
                    }>
                    {total}
                  </Paragraph>
                </div>
              </>
            ) : (
              <CartIcon
                className={
                  isMenuModalOpen
                    ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                    : `${styles.headerAccount__icon}`
                }
              />
            )}
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HeaderAccount
