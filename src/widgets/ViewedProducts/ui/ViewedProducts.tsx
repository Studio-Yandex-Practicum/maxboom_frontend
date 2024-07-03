import { FC, useEffect, useState } from 'react'

import { VIEWED_PRODUCTS_COUNT_ON_MAIN } from '@/shared/constants/constants'
import { ECardView } from '@/shared/model/types/common'
import Heading from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { ProductItem, TProductCard } from '@/widgets/ProductItem/ProductItem'

import { getViewedProductsFromStorage } from '../model/functions/functions'
import ViewedProductsSkeleton from '../ViewedProductsSkeleton/ViewedProductsSkeleton'

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

{
  /*TODO по FSD нельзя использовать widget ProductItem в widget, нужно перенести ProductItem в features или entities*/
}

const ViewedProducts: FC<IViewedProductsProps> = ({ title, hasLabel }) => {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const viewedProducts: TProductCard[] = getViewedProductsFromStorage().map(product => ({
    ...product,
    layout: ECardView.GRID,
    isLoading: false
  }))

  const productList = viewedProducts.map((item, index) => {
    if (hasLabel && index > VIEWED_PRODUCTS_COUNT_ON_MAIN) return null

    return <ProductItem key={item.slug} {...item} />
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const skeletonCount = hasLabel
    ? Math.min(VIEWED_PRODUCTS_COUNT_ON_MAIN, viewedProducts.length)
    : viewedProducts.length

  return (
    <section className={styles.viewedproducts}>
      <div className={styles.viewedproducts__header}>
        <Heading className={styles.viewedproducts__title}>{title}</Heading>
        {hasLabel && <span className={styles.viewedproducts__label}>Вы смотрели</span>}
      </div>
      <Scroll className={styles.viewedproducts__scroll} withManualGrip={true}>
        {showSkeleton
          ? Array.from({ length: skeletonCount }).map((_, index) => <ViewedProductsSkeleton key={index} />)
          : productList}
      </Scroll>
    </section>
  )
}

export default ViewedProducts
