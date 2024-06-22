import { Story, Meta } from '@storybook/react'

import { WidgetButtonsPurchase } from '@/features/WidgetButtonsPurchase/WidgetButtonsPurchase'
import { ECardView } from '@/shared/model/types/common'

export default {
  title: 'features/WidgetButtonsPurchase',
  component: WidgetButtonsPurchase
} as Meta

type TWidgetButtonsPurchase = {
  isInCart: boolean
  handleAddToCart: VoidFunction
  onEyeClick: VoidFunction
  layout: ECardView
  wb_urls: string
}

const Template: Story<TWidgetButtonsPurchase> = args => <WidgetButtonsPurchase {...args} />

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
