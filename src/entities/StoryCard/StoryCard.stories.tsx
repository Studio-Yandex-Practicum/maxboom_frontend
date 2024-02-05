import type { Meta, StoryObj } from '@storybook/react'

import Img1 from '@/assets/images/stories/img-stories-01.png'

import StoryCard from './StoryCard'

const meta = {
  title: 'entities/StoryCard',
  component: StoryCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: {
      id: 1,
      src: Img1,
      alt: 'Stock image'
    }
  }
}
