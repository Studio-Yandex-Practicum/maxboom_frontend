import type { Meta, StoryObj } from '@storybook/react'

import { blogPageData } from '@/mockData/blogPageData'

import BlogTags from './BlogTags'

const meta = {
  title: 'entities/BlogTags',
  component: BlogTags,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BlogTags>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '350px' }}>
      <BlogTags cards={blogPageData} filterItems={() => {}} />
    </div>
  )
}

Default.args = {
  cards: blogPageData
}
