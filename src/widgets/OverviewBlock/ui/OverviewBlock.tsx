import { FC } from 'react'

import OverviewBox from '@/entities/OverviewBox'
import { Routes } from '@/shared/config/routerConfig/routes'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import styles from './OverviewBlock.module.scss'

/**
 * Компонент OverviewBlock - используется на странице личного кабинета.
 */

const OverviewBlock: FC = () => {
  return (
    <section className={styles.overviewBlock}>
      <Heading type={HeadingType.MEDIUM}>Обзор</Heading>
      <OverviewBox
        title="Мой последний заказ"
        pageRoute={Routes.ORDER_HISTORY}
        pageRouteText="Все заказы"
        subtitle="Вы еще не совершали покупок!"
        // TODO - это пригодится когда буду прикручивать апи
        // itemRoute={'#'}
        // itemRouteText={'1 товар на общую сумму 768 ₽'}
      />

      <OverviewBox
        title="Корзина"
        pageRoute={Routes.CART}
        pageRouteText="Вся корзина"
        subtitle="Здесь будет карточка товара"
        // TODO - это пригодится когда буду прикручивать апи
        // subtitle="Ваша корзина пуста!"
        itemRoute={'#'}
        itemRouteText={'1 товар на общую сумму 768 ₽'}
      />
    </section>
  )
}

export default OverviewBlock
