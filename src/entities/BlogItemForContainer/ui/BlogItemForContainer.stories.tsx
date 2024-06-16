import type { Meta, StoryObj } from '@storybook/react'

import BlogItemForContainer from './BlogItemForContainer'

const meta = {
  title: 'entities/BlogItemForContainer',
  component: BlogItemForContainer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BlogItemForContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const views = 107
  const reviews = 15

  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
        height: '60px',
        background: '#666'
      }}>
      <BlogItemForContainer views={views} reviews={reviews} />
    </div>
  )
}

Default.args = {
  views: 107,
  reviews: 15
}
