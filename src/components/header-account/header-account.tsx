import React, { FC } from 'react'
import styles from './header-account.module.scss'
import person from '../../images/header-account/person.svg'
import scales from '../../images/header-account/scales.svg'
import heart from '../../images/header-account/heart.svg'
import cart from '../../images/header-account/cart.svg'

type THeaderAccountProps = {
  counter: number
  total: string
}

const HeaderAccount: FC<THeaderAccountProps> = ({ counter, total }) => {
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
