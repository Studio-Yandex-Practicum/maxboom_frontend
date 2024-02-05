import type { Meta, StoryObj } from '@storybook/react'

import { LINK_REVIEWS_ALL, TEXT_CUSTOMERS_ABOUT_US } from '@/shared/constants/constants'

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

export const Default: Story = {
  args: {
    title: TEXT_CUSTOMERS_ABOUT_US,
    linkText: LINK_REVIEWS_ALL
  }
}
