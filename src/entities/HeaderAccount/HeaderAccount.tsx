import { FC, lazy, useState, Suspense, useEffect, useMemo } from 'react'
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
import ContextMenuElement from '@/shared/ui/ContextMenuElement/ContextMenuElement'
import Link from '@/shared/ui/Link/Link'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'
import Spinner from '@/shared/ui/Spinner/Spinner'
import ListItemLink from '@/widgets/Header/ui/ListItemLink'

import { useFavorite } from '../Favorite/model/hooks/useFavorite'

import styles from './headerAccount.module.scss'

export type HeaderAccountProps = {
  isMenuModalOpen?: boolean
  changeSearchModalState?: () => void
  handleClose?: () => void
  counter: number
  total: number
}

const LazyLoginForm = lazy(() => import('@/features/login/index'))

/**
 * Компонент хедера, показывающий блок аккаунта
 * @param {boolean} isMenuModalOpen - состояние открытия модального окна меню;
 * @param {boolean} changeSearchModalState - состояние открытия модального окна поиска;
 * @param {function} handleClose - функция закрытия модального окна;
 * @param {string} counter - счетчик количества товаров в корзине;
 * @param {number} total - полная стоимость;
 */
const HeaderAccount: FC<HeaderAccountProps> = ({
  isMenuModalOpen,
  changeSearchModalState,
  handleClose,
  counter,
  total
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const favoriteProducts = useFavorite()

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

  const closeModal = () => {
    setIsModalClosing(true)
  }

  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (isAuth && isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }
  }, [isModalOpen, isAuth])

  const userMenu = useMemo(
    () =>
      isAuth &&
      isScreenLg && (
        <ul className={styles.headerAccount__contextMenuList}>
          <ListItemLink to={Routes.ACCOUNT}>Личный кабинет</ListItemLink>
          <ListItemLink to={Routes.ORDER_HISTORY}>История заказов</ListItemLink>
          <ListItemLink to={Routes.TRANSACTIONS}>Транзакции</ListItemLink>
          <ListItemLink to={Routes.DOWNLOADS}>Загрузки</ListItemLink>
          <ListItemLink to={Routes.LOGOUT}>Выход</ListItemLink>
        </ul>
      ),
    [isAuth, isScreenLg]
  )

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <Suspense fallback={<Spinner />}>
            <LazyLoginForm isModalOpen={isModalOpen} handleClose={closeModal} />
          </Suspense>
        </Modal>
      )}
      <ul
        className={
          isScreenLg || isMenuModalOpen ? `${styles.headerAccount}` : `${styles.headerAccount__mobile}`
        }>
        {isScreenLg || isMenuModalOpen ? null : (
          <Button onClick={changeSearchModalState} className={styles.headerAccount__search}>
            <SearchIcon className={styles.headerAccount__icon} />
          </Button>
        )}
        <li>
          {/* Временная реализация
          TODO заменить на дропдаун на ховер в контекстном меню добавить пункт-кнопку для разлогина пока висит на иконке */}
          <ContextMenuElement className={styles.header__item} content={userMenu}>
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
          </ContextMenuElement>
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
              <Span className={styles.headerAccount__favoriteSpan}>
                {favoriteProducts && favoriteProducts.length > 0 && favoriteProducts.length}
              </Span>
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
            {!isScreenLg && !isMenuModalOpen && counter && (
              <div className={styles.headerAccount__cartCounterMobile}>{counter}</div>
            )}
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
                    {total.toFixed(0)} ₽
                  </Paragraph>
                </div>
              </>
            ) : (
              <div>
                <CartIcon
                  className={
                    isMenuModalOpen
                      ? `${styles.headerAccount__icon} ${styles.headerAccount__icon_active}`
                      : `${styles.headerAccount__icon}`
                  }
                />
              </div>
            )}
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HeaderAccount
