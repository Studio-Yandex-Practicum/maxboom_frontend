import { FC } from 'react'

import { VIEWED_PRODUCTS_COUNT_ON_MAIN } from '@/shared/constants/constants'
import { ECardView } from '@/shared/model/types/common'
import Heading from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

import { getViewedProductsFromStorage } from './model/functions/functions'
import styles from './ViewedProducts.module.scss'

interface IViewedProductsProps {
  title: string
  hasLabel: boolean
}

/**
 * Widget с карточками просмотренных товаров текущей сессии из session storage.
 * @param title {string} - Заголовок виджета
 * @param hasLabel {boolean} - Флаг, сигнализирующий о том, должна ли выводиться слева плашка с лейблом. При этом в случае true выводится ограниченное количество карточек
 */
export const ViewedProducts: FC<IViewedProductsProps> = ({ title, hasLabel }) => {
  const viewedProducts = getViewedProductsFromStorage()
  {
    /*TODO по FSD нельзя использовать widget ProductItem в widget, нужно перенести ProductItem в features или entities*/
  }
  const productList = viewedProducts.map((item, index) => {
    if (hasLabel && index > VIEWED_PRODUCTS_COUNT_ON_MAIN) return

    return (
      <ProductItem
        key={item.slug}
        layout={ECardView.GRID}
        id={item.id}
        name={item.name}
        price={item.price}
        brand={item.brand}
        slug={item.slug}
        description={item.description}
        code={item.code}
        images={item.images}
        label_hit={item.label_hit}
        label_popular={item.label_popular}
        quantity={item.quantity}
      />
    )
  })

  return (
    <section className={styles.viewedproducts}>
      <div className={styles.viewedproducts__header}>
        <Heading className={styles.viewedproducts__title}>{title}</Heading>
        {hasLabel && <span className={styles.viewedproducts__label}>Вы смотрели</span>}
      </div>
      <Scroll className={styles.viewedproducts__scroll}>{productList}</Scroll>
    </section>
  )
}
