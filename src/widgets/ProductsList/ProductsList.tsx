import type { FC } from 'react'

import { ProductItem } from '@/features/ProductItem/ProductItem'
import type { ProductsInfo } from '@/pages/ProductsPage/types/types'
import { ECardView } from '@/shared/model/types/common'
import type { IImage } from '@/shared/model/types/ImageModel'

type TProps = {
  items: ProductsInfo
  cardView: ECardView
}

/**
 * Компонент генерации сетки товаров на странице категории
 * @param {ProductsInfo} items - массив товаров для генерации товарной сетки;
 * @param {ECardView} cardView - тип выбранной сетки отображения карточек товаров;
 * */
export const ProductsList: FC<TProps> = ({ items, cardView }) => {
  return items.results.map(item => (
    <ProductItem
      id={item.id}
      key={item.id}
      layout={cardView}
      name={item.name}
      price={Number(item.price)}
      brand={item.brand}
      slug={item.slug}
      description={item.description}
      code={item.code}
      images={item.images.map((img: IImage, index: number) => {
        return {
          image: img.image,
          index
        }
      })}
      label_hit={item.label_hit as boolean}
      label_popular={item.label_popular as boolean}
      quantity={item.quantity as number}
      wb_urls={item.wb_urls}
    />
  ))
}
