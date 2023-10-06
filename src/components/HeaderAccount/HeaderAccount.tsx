import React, { FC } from 'react'
import styles from './headerAccount.module.scss'
import person from '../../assets/images/headerAccount/person.svg'
import scales from '../../assets/images/headerAccount/scales.svg'
import heart from '../../assets/images/headerAccount/heart.svg'
import cart from '../../assets/images/headerAccount/cart.svg'

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
    <div className={`${styles['header__cart-wrapper']}`}>
      <article className={`${styles.header__cart}`}>
        <img src={person} alt="человек" className={`${styles['header__cart-image']}`} />
      </article>

      <article className={`${styles.header__cart}`}>
        <img src={scales} alt="весы" className={`${styles['header__cart-image']}`} />
        <div className={`${styles.header__line}`}></div>
        <img src={heart} alt="сердце" className={`${styles['header__cart-image']}`} />
      </article>
      <article className={`${styles.header__cart}`}>
        <img src={cart} alt="корзина" className={`${styles['header__cart-image']}`} />
        <div className={`${styles['header__cart-container']}`}>
          <div className={`${styles['header__counter-container']}`}>
            <p className={`${styles['header__cart-total-text']}`}>Корзина</p>
            <p className={`${styles['header__cart-counter']}`}>{counter}</p>
          </div>
          <p className={`${styles['header__cart-total']}`}>{total}</p>
        </div>
      </article>
    </div>
  )
}

export default HeaderAccount
