import { FC, lazy, useState, Suspense } from 'react'
import PersonIcon from '@/assets/images/headerAccount/person.svg'
import ScalesIcon from '@/assets/images/headerAccount/scales.svg'
import HeartIcon from '@/assets/images/headerAccount/heart.svg'
import CartIcon from '@/assets/images/headerAccount/cart.svg'
import Popup from '@/ui/Popup/Popup'
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
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handlePersonIconClick = () => {
    setIsPopupOpen(true)
  }

  const changePopupState = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <>
      {isPopupOpen && (
        <Suspense fallback={<Spinner />}>
          <Popup isPopupOpen={isPopupOpen} onClose={changePopupState}>
            <LazyLoginForm />
          </Popup>
        </Suspense>
      )}
      <div className={styles['header__cart-wrapper']}>
        <article className={styles.header__cart}>
          <PersonIcon className={styles['header__cart-image']} onClick={handlePersonIconClick} />
        </article>

        <article className={styles.header__cart}>
          <ScalesIcon className={styles['header__cart-image']} />
          <div className={styles.header__line}></div>
          <HeartIcon className={styles['header__cart-image']} />
        </article>
        <article className={styles.header__cart}>
          <CartIcon className={styles['header__cart-image']} />
          <div className={styles['header__cart-container']}>
            <div className={styles['header__counter-container']}>
              <p className={styles['header__cart-total-text']}>Корзина</p>
              <p className={styles['header__cart-counter']}>{counter}</p>
            </div>
            <p className={styles['header__cart-total']}>{total}</p>
          </div>
        </article>
      </div>
    </>
  )
}

export default HeaderAccount
