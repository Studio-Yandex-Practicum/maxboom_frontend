import { FC, lazy, useState, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

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
import { Button } from '@/shared/ui/Button/Button'
import Link from '@/shared/ui/Link/Link'
import Modal from '@/shared/ui/Modal/Modal'
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
      <ul className={styles['header__cart-wrapper']}>
        <li>
          {isAuth ? (
            // Временная реализация
            // TODO заменить на дропдаун на ховер в контекстном меню добавить пункт-кнопку для разлогина пока висит на иконке
            <Button onClick={onLogout} className={styles.header__cart}>
              <PersonAuthIcon />
            </Button>
          ) : (
            <Button onClick={handlePersonIconClick} className={styles.header__cart}>
              <PersonIcon />
            </Button>
          )}
        </li>

        <li>
          <Link to={Routes.COMPARE} className={styles.header__cart}>
            <ScalesIcon />
          </Link>
        </li>
        <li>
          <Link to={Routes.FAVORITES} className={styles.header__cart}>
            <HeartIcon />
          </Link>
        </li>
        <li>
          <Link to={Routes.CART} className={styles.header__cart}>
            <CartIcon />
            <div className={styles['header__cart-container']}>
              <div className={styles['header__counter-container']}>
                <p className={styles['header__cart-total-text']}>Корзина</p>
                <p className={styles['header__cart-counter']}>{counter}</p>
              </div>
              <p className={styles['header__cart-total']}>{total}</p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HeaderAccount
