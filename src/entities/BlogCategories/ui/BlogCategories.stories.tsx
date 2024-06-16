import type { Meta, StoryObj } from '@storybook/react'

import { blogPageData } from '@/mockData/blogPageData'

import BlogCategories from './BlogCategories'

const meta = {
  title: 'entities/BlogCategories',
  component: BlogCategories,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BlogCategories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '350px' }}>
      <BlogCategories cards={blogPageData} filterItems={() => {}} />
    </div>
  )
}

Default.args = {
  cards: blogPageData
}
