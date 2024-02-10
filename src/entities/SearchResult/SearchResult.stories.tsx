import { Meta, Story } from '@storybook/react'

import { searchResponseData } from '@/mockData/searchData'

import SearchResult from './SearchResult'

export default {
  title: 'Widgets/SearchResult',
  component: SearchResult
} as Meta

const Template: Story = () => {
  return <SearchResult results={searchResponseData.data} />
}

export const Default = Template.bind({})
Default.args = {}
