import { Story, Meta } from '@storybook/react'

import { WidgetButtonsFunctions } from '@/features/WidgetButtonsFunctions/WidgetButtonsFunctions'
import { ECardView } from '@/shared/model/types/common'

export default {
  title: 'features/WidgetButtonsFunction',
  component: WidgetButtonsFunctions
} as Meta

type TWidgetButtonsFunctions = {
  isLiked: boolean
  handleLike: VoidFunction
  isInCompared: boolean
  handleAddToCompared: VoidFunction
  layout: ECardView
}

const Template: Story<TWidgetButtonsFunctions> = args => <WidgetButtonsFunctions {...args} />

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
