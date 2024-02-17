import { Story, Meta } from '@storybook/react'

import { ECardView } from '@/shared/model/types/common'
import { ProductItem } from '@/widgets/ProductItem/ProductItem'

export default {
  title: 'widgets/ProductItem',
  component: ProductItem
} as Meta

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
}

const Template: Story<TProductCard> = args => <ProductItem {...args} />

export const Grid = Template.bind({})
Grid.args = {
  layout: ECardView.GRID
}

export const List = Template.bind({})
List.args = {
  layout: ECardView.LIST
}

export const Compact = Template.bind({})
Compact.args = {
  layout: ECardView.COMPACT
}
