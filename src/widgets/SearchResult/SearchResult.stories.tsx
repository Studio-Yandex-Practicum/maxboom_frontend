import { Meta, Story } from '@storybook/react'
import SearchResult from './SearchResult'
import { searchResponseData } from '@/mockData/searchData'

export default {
  title: 'Widgets/SearchResult',
  component: SearchResult
} as Meta

const Template: Story = () => {
  return <SearchResult results={searchResponseData.data} />
}

export const Default = Template.bind({})
Default.args = {}
