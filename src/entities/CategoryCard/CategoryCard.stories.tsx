import type { Meta, StoryObj } from '@storybook/react'

import card1 from '../../assets/images/categoryCards/img-categories-01-210x263.webp'

import { CategoryCard } from './CategoryCard'

const meta = {
  title: 'entities/CategoryCard',
  component: CategoryCard
} satisfies Meta<typeof CategoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: card1
  }
}
