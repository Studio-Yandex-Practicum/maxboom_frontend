import { FC, lazy, useState, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import SearchIcon from '@/assets/icons/iconSearch.svg'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { logout } from '@/features/login/model/services/logout/logout'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { Routes } from '@/shared/config/routerConfig/routes'
import CartIcon from '@/shared/icons/cart.svg'
import HeartIcon from '@/shared/icons/heart.svg'
import PersonIcon from '@/shared/icons/person.svg'
import PersonAuthIcon from '@/shared/icons/person_auth.svg'
import ScalesIcon from '@/shared/icons/scales.svg'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import { Button } from '@/shared/ui/Button/Button'
import Link from '@/shared/ui/Link/Link'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'

import styles from './headerAccount.module.scss'

export type HeaderAccountProps = {
  counter: number
  total: string
}

const LazyLoginForm = lazy(() => import('@/features/login/index'))

/**
 * @param {string} counter - счетчик количества товаров в корзине
 * @param {string} total - полная стоимость
 */
const HeaderAccount: FC<HeaderAccountProps> = ({ counter, total }) => {
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
      <ul className={isScreenLg ? `${styles.headerAccount}` : `${styles.headerAccount__mobile}`}>
        {!isScreenLg && <SearchIcon className={styles.headerAccount__search} />}
        <li>
          {/* Временная реализация
          TODO заменить на дропдаун на ховер в контекстном меню добавить пункт-кнопку для разлогина пока висит на иконке */}
          <Button
            onClick={isAuth ? onLogout : handlePersonIconClick}
            className={isScreenLg ? `${styles.headerAccount__cart}` : `${styles.headerAccount__cartMobile}`}>
            {isAuth ? <PersonAuthIcon /> : <PersonIcon />}
          </Button>
        </li>

        {isScreenLg && (
          <li>
            <Link to={Routes.COMPARE} className={styles.headerAccount__cart}>
              <ScalesIcon />
            </Link>
          </li>
        )}

        {isScreenLg && (
          <li>
            <Link to={Routes.FAVORITES} className={styles.headerAccount__cart}>
              <HeartIcon />
            </Link>
          </li>
        )}

        <li>
          <Link
            to={Routes.CART}
            className={isScreenLg ? `${styles.headerAccount__cart}` : `${styles.headerAccount__cartMobile}`}>
            <CartIcon />
            {isScreenLg && (
              <div className={styles.headerAccount__cartContainer}>
                <div className={styles.headerAccount__counterContainer}>
                  <Paragraph className={styles.headerAccount__cartTotalText}>Корзина</Paragraph>
                  <Paragraph className={styles.headerAccount__cartCounter}>{counter}</Paragraph>
                </div>
                <Paragraph className={styles.headerAccount__cartTotal}>{total}</Paragraph>
              </div>
            )}
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HeaderAccount
