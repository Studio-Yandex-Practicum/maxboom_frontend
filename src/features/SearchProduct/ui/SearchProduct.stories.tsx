import { Meta, Story } from '@storybook/react'
import SearchProduct from './SearchProduct'

export default {
  title: 'Features/SearchProduct',
  component: SearchProduct
} as Meta

const Template: Story = () => <SearchProduct />

export const Default = Template.bind({})
Default.args = {}
