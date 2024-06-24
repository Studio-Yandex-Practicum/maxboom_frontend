import { FC, useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@/app/providers/StoreProvider/config/store'
import { VIEWED_PRODUCTS_COUNT_ON_MAIN } from '@/shared/constants/constants'
import { ECardView } from '@/shared/model/types/common'
import Heading from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

import { getViewedProductsFromStorage } from '../model/functions/functions'
import ViewedProductsSkeleton from '../ViewedProductsSkeleton/ViewedProductsSkeleton'

import styles from './ViewedProducts.module.scss'

interface IViewedProductsProps {
  title: string
  hasLabel: boolean
}

type PropsFromRedux = ConnectedProps<typeof connector>

/**
 * Widget с карточками просмотренных товаров текущей сессии из session storage.
 * @param title {string} - Заголовок виджета
 * @param hasLabel {boolean} - Флаг, сигнализирующий о том, должна ли выводиться слева плашка с лейблом. При этом в случае true выводится ограниченное количество карточек
 */

const ViewedProducts: FC<IViewedProductsProps & PropsFromRedux> = ({ title, hasLabel, isLoading }) => {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const viewedProducts = getViewedProductsFromStorage()
  {
    /*TODO по FSD нельзя использовать widget ProductItem в widget, нужно перенести ProductItem в features или entities*/
  }
  const productList = viewedProducts.map((item, index) => {
    if (hasLabel && index > VIEWED_PRODUCTS_COUNT_ON_MAIN) return null

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

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setShowSkeleton(false)
    }
  }, [isLoading])

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
        {isLoading || showSkeleton
          ? Array.from({ length: skeletonCount }).map((_, index) => <ViewedProductsSkeleton key={index} />)
          : productList}
      </Scroll>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.loading.isLoading
})

const connector = connect(mapStateToProps)

export default connector(ViewedProducts)
