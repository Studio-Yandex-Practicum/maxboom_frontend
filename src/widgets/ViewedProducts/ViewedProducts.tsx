import { FC } from 'react'

import { ECardView } from '@/shared/model/types/common'
import Heading from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

import { getViewedProductsFromStorage } from './model/functions/functions'
import styles from './ViewedProducts.module.scss'

/**
 * Widget с карточками просмотренных товаров текущей сессии из session storage.
 */
export const ViewedProducts: FC = () => {
  const viewedProducts = getViewedProductsFromStorage()
  {
    /*TODO нельзя использовать widget ProductItem в widget, нужно перенести ProductItem в features или entities*/
  }
  const productList = viewedProducts.map(item => (
    <ProductItem
      key={item.slug}
      layout={ECardView.GRID}
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
  ))

  return (
    <section className={styles.viewedproducts}>
      <Heading className={styles.viewedproducts__header}>Вы смотрели</Heading>
      <Scroll className={styles.viewedproducts__scroll}>{productList}</Scroll>
    </section>
  )
}
