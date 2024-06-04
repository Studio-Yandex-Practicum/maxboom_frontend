import { FC, useMemo } from 'react'

import { useCartSelector } from '@/entities/CartEntity/model/hooks/sliceHooks'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Scroll from '@/shared/ui/Scroll/Scroll'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './AccountCart.module.scss'
import { getCountStrByNumber } from './models/functions/functions'
import { AccountCartCard } from './ui/AccountCartCard/AccountCartCard'

/**
 * Виджет товары в корзине для страницы аккаунта пользователя
 */
export const AccountCart: FC = () => {
  const cart = useCartSelector()

  const footer = useMemo(() => {
    if (cart && cart.cart && cart.cart.products?.length) {
      const count = String(cart.cart.products?.length)
      const productCountStr = getCountStrByNumber(+count)

      return (
        <Link to={Routes.CART} className={styles.accountCart__link}>
          {`${productCountStr} на общую сумму ${Number(cart.cart.cart_full_price).toFixed(0)} ₽`}
        </Link>
      )
    } else {
      return null
    }
  }, [cart])

  return (
    <section className={styles.accountCart}>
      <div className={styles.accountCart__header}>
        <Subheading className={styles.accountCart__title}>Корзина</Subheading>
        <Link to={Routes.CART} className={styles.accountCart__link}>
          Вся корзина
        </Link>
      </div>
      <div className={styles.accountCart__order}>
        {cart && cart.cart && cart.cart.products?.length ? (
          <Scroll withManualGrip={true} className={styles.accountCart__scroll}>
            {cart.cart.products.map(p => (
              <AccountCartCard product={p.product} key={p.product.id} />
            ))}
          </Scroll>
        ) : (
          <Paragraph className={styles.accountCart__text}>Ваша корзина пуста!</Paragraph>
        )}
      </div>
      <div className={styles.accountCart__footer}>{footer}</div>
    </section>
  )
}
