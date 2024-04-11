import { FC } from 'react'

import type { IObjectWithImage } from '@/pages/ProductPage/model/types/productTypes'
import type { ProductsInfo } from '@/pages/ProductsPage/types/types'
import { ECardView } from '@/shared/model/types/common'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

type Props = {
  items: ProductsInfo
  cardView: ECardView
}

/**
 * Компонент генерации сетки товаров на странице категории
 * @param {ProductsInfo} items - массив товаров для генерации товарной сетки;
 * @param {ECardView} cardView - тип выбранной сетки отображения карточек товаров;
 * */
export const ProductsList: FC<Props> = ({ items, cardView }) => {
  return items.results.map(item => (
    <ProductItem
      key={item.id}
      layout={cardView}
      name={item.name}
      price={item.price}
      brand={item.brand}
      slug={item.slug}
      description={item.description}
      code={item.code}
      images={item.images.map((img: IObjectWithImage, index: number) => {
        return {
          image: img.image,
          index
        }
      })}
      label_hit={item.label_hit}
      label_popular={item.label_popular}
      quantity={item.quantity}
    />
  ))
}
