import { FC } from 'react'

import { AccountCartCard } from '@/entities/AccountCartCard/AccountCartCard'
import { useCartSelector } from '@/entities/CartEntity/model/hooks/sliceHooks'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Scroll from '@/shared/ui/Scroll/Scroll'
import Span from '@/shared/ui/Span/Span'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './AccountCart.module.scss'

export const AccountCart: FC = () => {
  const cart = useCartSelector()

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
          <Scroll withManualGrip={true}>
            {cart.cart.products.map(p => (
              <AccountCartCard product={p.product} key={p.product.id} />
            ))}
          </Scroll>
        ) : (
          <Paragraph className={styles.accountCart__text}>Ваша корзина пуста!</Paragraph>
        )}
      </div>
      <div className={styles.accountCart__footer}>
        <Span className={styles.accountCart__span}>6 товаров на общую сумму 6528 ₽</Span>
      </div>
    </section>
  )
}
