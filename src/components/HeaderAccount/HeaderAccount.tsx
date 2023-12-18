import { type FC } from 'react'
import PersonIcon from '@/assets/images/headerAccount/person.svg'
import ScalesIcon from '@/assets/images/headerAccount/scales.svg'
import HeartIcon from '@/assets/images/headerAccount/heart.svg'
import CartIcon from '@/assets/images/headerAccount/cart.svg'
import Link from '@/shared/ui/Link/Link'
import { Routes } from '@/shared/config/routerConfig/routes'
import styles from './headerAccount.module.scss'

export type HeaderAccountProps = {
  counter: number
  total: string
}

/**
 * @param {string} counter - счетчик количества товаров в корзине
 * @param {string} total - полная стоимость
 */
const HeaderAccount: FC<HeaderAccountProps> = ({ counter, total }) => {
  return (
    <ul className={styles['header__cart-wrapper']}>
      <li className={styles.header__cart}>
        <Link to={Routes.LOGIN}>
          <PersonIcon className={styles['header__cart-image']} />
        </Link>
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
  )
}

export default HeaderAccount
