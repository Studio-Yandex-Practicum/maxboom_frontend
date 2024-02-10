import { FC, lazy, useState, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import CartIcon from '@/assets/images/headerAccount/cart.svg'
import HeartIcon from '@/assets/images/headerAccount/heart.svg'
import PersonIcon from '@/assets/images/headerAccount/person.svg'
import PersonAuthIcon from '@/assets/images/headerAccount/person_auth.svg'
import ScalesIcon from '@/assets/images/headerAccount/scales.svg'
import { getUserAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { logout } from '@/features/login/model/services/logout/logout'
import { loginActions } from '@/features/login/model/slice/loginSlice'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
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
        <li className={styles.header__cart}>
          {isAuth ? (
            // Временная реализация
            // TODO заменить на дропдаун на ховер в контекстном меню добавить пункт-кнопку для разлогина пока висит на иконке
            <PersonAuthIcon onClick={onLogout} />
          ) : (
            <PersonIcon onClick={handlePersonIconClick} />
          )}
        </li>

        <li className={styles.header__cart}>
          <Link to={Routes.COMPARE}>
            <ScalesIcon className={styles['header__cart-image']} />
          </Link>
        </li>
        <li className={styles.header__cart}>
          <Link to={Routes.FAVORITES}>
            <HeartIcon className={styles['header__cart-image']} />
          </Link>
        </li>
        <li className={styles.header__cart}>
          <Link to={Routes.CART} style={{ display: 'flex', alignItems: 'center' }}>
            <CartIcon className={styles['header__cart-image']} />
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
