import { Meta, Story } from '@storybook/react'
import { searchResponseData } from '@/mockData/searchData'
import SearchItem from './SearchItem'
import { TProduct } from '@/shared/model/types/common'
import { TLinkProps } from '@/shared/ui/Link/Link'

export default {
  title: 'Entities/SearchItem',
  component: SearchItem,
  parameters: {
    layout: 'centered'
  }
} as Meta

type StoryProps = TProduct & TLinkProps

const Template: Story<StoryProps> = args => <SearchItem {...args} />

export const Default: Story<StoryProps> = Template.bind({})
Default.args = {
  ...(searchResponseData.data[2] as StoryProps)
}
