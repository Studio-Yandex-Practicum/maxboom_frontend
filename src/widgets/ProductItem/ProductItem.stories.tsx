import { Story, Meta } from '@storybook/react'

import image1 from '@/assets/images/product/1-260x260.webp'
import image2 from '@/assets/images/product/1-500x500.webp'
import image3 from '@/assets/images/product/2-500x500.webp'
import image4 from '@/assets/images/product/3-500x500.webp'
import image5 from '@/assets/images/product/4-500x500.webp'
import { TImgList } from '@/pages/ProductsPage/types/types'
import { ECardView } from '@/shared/model/types/common'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

export default {
  title: 'widgets/ProductItem',
  component: ProductItem
} as Meta

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
  name: string
  price: number
  brand: string
  slug: string
  description: string
  code: number
  images: TImgList
  label_hit: boolean
  label_popular: boolean
  quantity: number
  id: number
}

const Template: Story<TProductCard> = args => <ProductItem {...args} />

export const Grid = Template.bind({})
Grid.args = {
  layout: ECardView.GRID,
  name: 'Тестовое имя товара',
  price: 999,
  brand: 'MaxBoom',
  slug: '/test',
  description: 'Тестовое описание товара',
  code: 999,
  images: [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }],
  label_hit: true,
  label_popular: true,
  quantity: 999,
  id: 4567
}

export const List = Template.bind({})
List.args = {
  layout: ECardView.LIST,
  name: 'Тестовое имя товара',
  price: 999,
  brand: 'MaxBoom',
  slug: '/test',
  description: 'Тестовое описание товара',
  code: 999,
  images: [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }],
  label_hit: true,
  label_popular: true,
  quantity: 999
}

export const Compact = Template.bind({})
Compact.args = {
  layout: ECardView.COMPACT,
  name: 'Тестовое имя товара',
  price: 999,
  brand: 'MaxBoom',
  slug: '/test',
  description: 'Тестовое описание товара',
  code: 999,
  images: [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }],
  label_hit: true,
  label_popular: true,
  quantity: 999
}
