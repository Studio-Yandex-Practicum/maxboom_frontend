import { FC } from 'react'

import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './LastOrder.module.scss'

/**
 *
 * Компонент для отображения последнего заказа на странице аккаунта
 * TODO добавить API и страницу последнего заказа
 */
export const LastOrder: FC = () => {
  return (
    <section className={styles.lastOrder}>
      <div className={styles.lastOrder__header}>
        <Subheading className={styles.lastOrder__title}>Мой последний заказ</Subheading>
        <Link to={Routes.ORDER_HISTORY} className={styles.lastOrder__link}>
          Все заказы
        </Link>
      </div>
      <div className={styles.lastOrder__order}>
        <Paragraph className={styles.lastOrder__text}>Вы еще не совершали покупок!</Paragraph>
      </div>
      <div className={styles.lastOrder__footer}></div>
    </section>
  )
}
