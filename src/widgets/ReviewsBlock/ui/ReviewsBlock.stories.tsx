import type { Meta, StoryObj } from '@storybook/react'

import ReviewsBlock from './ReviewsBlock'

const meta = {
  title: 'widgets/ReviewsBlock',
  component: ReviewsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ReviewsBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1400px' }}>
      <ReviewsBlock />
    </div>
  )
}

Default.args = {}
