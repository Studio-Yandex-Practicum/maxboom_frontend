import { Story, Meta } from '@storybook/react'

import { ECardView } from '@/shared/model/types/common'
import { ProductLabels } from '@/shared/ui/ProductLabels/ProductLabels'

type TProductCard = {
  layout: ECardView
}

export default {
  title: 'shared/ProductLabels',
  component: ProductLabels
} as Meta

const Template: Story<TProductCard> = args => <ProductLabels {...args} />

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
